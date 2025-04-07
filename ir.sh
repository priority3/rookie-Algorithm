#!/bin/bash

# 检查参数是否存在
if [ $# -eq  ]; then
    echo "Usage: $0 <file> (format: xxa-xxb)"
    exit 1
fi

# 获取输入参数并分割
IFS='-' read -ra PARTS <<< "$1"
if [ ${#PARTS[@]} -ne 2 ]; then
    echo "Error: Invalid file format. Expected xxa-xxb"
    exit 1
fi

xxa=${PARTS[0]}
xxb=${PARTS[1]}

# 修正后的替换规则（使用完整匹配）
case "$xxa" in
    m) replaced_xxa="medium" ;;
    e) replaced_xxa="easy" ;;
    h) replaced_xxa="hard" ;;
    ldw) replaced_xxa="leetcodeDouWeek" ;;
    lw) replaced_xxa="leetcodeWeek" ;;
    *) replaced_xxa="$xxa" ;;  # 默认保持原样
esac

# 1. 更新Cargo.toml
toml_content="\n[[bin]]\nname = \"${xxa}${xxb}\"\npath = \"src/bin/${replaced_xxa}/p${xxb}.rs\""

if [ -f "Cargo.toml" ]; then
    if grep -q "name = \"${xxa}${xxb}\"" Cargo.toml; then
        echo "Warning: Bin ${xxa}${xxb} already exists in Cargo.toml"
    else
        echo -e "$toml_content" >> Cargo.toml
        echo "Added bin configuration to Cargo.toml"
    fi
else
    echo "Error: Cargo.toml not found in current directory"
    exit 1
fi

# 2. 创建src/[replaced_xxa]/pxxb.rs
src_dir="src/${replaced_xxa}"
src_file="${src_dir}/p${xxb}.rs"
src_mod_file="${src_dir}/mod.rs"

mkdir -p "$src_dir"
if [ ! -f "$src_file" ]; then
    echo "pub struct Solution;" > "$src_file"
    echo "Created $src_file"
else
    echo "Warning: $src_file already exists"
fi

# 3. 更新src/[replaced_xxa]/mod.rs
if [ ! -f "$src_mod_file" ]; then
    echo "pub mod p${xxb};" > "$src_mod_file"
    echo "Added p${xxb} to ${src_mod_file}"
else
    if ! grep -q "pub mod p${xxb};" "$src_mod_file"; then
        echo "pub mod p${xxb};" >> "$src_mod_file"
        echo "Added p${xxb} to ${src_mod_file}"
    else
        echo "Warning: p${xxb} already exists in ${src_mod_file}"
    fi
fi

# 3. 创建src/bin/[replaced_xxa]/pxxb.rs
bin_dir="src/bin/${replaced_xxa}"
bin_file="${bin_dir}/p${xxb}.rs"

mkdir -p "$bin_dir"
if [ ! -f "$bin_file" ]; then
    cat > "$bin_file" <<EOF
use js_algorithm::${replaced_xxa}::p${xxb}::Solution;

fn main() {
    let nums = vec![1, 5, 11, 5];
    let result = Solution::can_partition();
    println!("Can partition: {}", result);
}
EOF
    echo "Created $bin_file"
else
    echo "Warning: $bin_file already exists"
fi

echo "Setup completed for ${xxa}-${xxb}"
