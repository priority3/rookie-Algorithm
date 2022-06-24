/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function(favorite) {
  let map = new Map();
  favorite.map((item,index) => {
    map.set(index,0);
  })
  let count = 0;
  for(let i = 0; i < favorite.length; i++){
    let edge = map.get(favorite[i]);
    let cur = map.get(i);
    console.log(favorite[i],":",edge," ",i,":",cur);
    if( edge >= 2){
      continue;
    }
    map.set(favorite[i],++edge);
    map.set(i,++cur);
    count++;
  }
  return count;
};

console.log(maximumInvitations([1,0,0,2,1,4,7,8,9,6,7,10,8]));

// ------------------------------------------------

var maximumInvitationsReal = function(favorite) {
    
//     1.首先判断是否选择相互喜欢的点
//     2.把相互喜欢的点删除掉 然后去找最大的强连通区域
    let a = favorite;
    let n = a.length;
    let ans = 0;
    const max = Math.max;
    const min = Math.min;
    let mp = []; //mp[i]为喜欢i节点的人
    for(let i=0;i<n;i++)mp[i] = [];
    for(let i=0;i<n;i++)
        mp[a[i]].push(i);
    const findMax = function(x) {
        let d = 0;
        for(let son of mp[x]) {
            if(a[x] === son)continue;
            d = max(d,findMax(son));
        }
        return 1 + d;        
    }
    let tem = 0;
    for(let i=0;i<n;i++) {
        if(i === a[a[i]]) {
            tem += findMax(i) + findMax(a[i]);
        }
    };
    ans = max(ans,tem/2);    
    let low = [];
    let dfn = [];
    let stack = [];
    let in_stack = [];
    let top = timestep =0;
    
    const tarjan = function(u) {
        low[u] = dfn[u] = ++timestep;
        stack[++top] = u;
        in_stack[u] = true;
        for(let j of mp[u]) {
            if(!dfn[j]) {
                tarjan(j);
                low[u] = min(low[u],low[j]);
            } else if(in_stack[j]) {
                low[u] = min(low[u],low[j]);
            }
        }
        if(low[u]==dfn[u]) {
            let y;
            let num = 0;
            do {
                num++;
                y = stack[top--];
                in_stack[y] = false;
            } while(y!=u);
            ans = max(ans,num);
        };
    };
    [1,0,3,2,5,6,7,4,9,8,11,10,11,12,10]
    for(let i=0;i<n;i++) {
        if(!dfn[i])tarjan(i);
    }
  
    return ans;
};