interface ipObj{
  spilt:string,
  fun:Function,
  length:number
}
interface map{
  IPv4:{
    [key:string]:ipObj
  },
  IPv6:{
    [key:string]:ipObj
  }
}
function validIPAddress(queryIP: string): string {
  const exec = (ipRes:ipObj,queryIP:string):boolean => {
    let flag = false
    const arr = queryIP.split(ipRes.spilt)
    for(let item of arr){
      flag = ipRes.fun(item)
      if(!flag) break
    }
    return flag && arr.length === ipRes.length
  }
  const ipMAP = {
    "IPv4":{
      spilt:'.',
      fun:(str:string):boolean => {
        let flag = true
        const num = Number(str)
        const reg = /(?![0-9]+)./
        if(reg.test(str)|| (str[0] === '0' && str.length > 1) || (num < 0 || num > 255) || !str.trim()){
          flag = false
        }
        return flag
      },
      length:4
    },
    "IPv6":{
      spilt:':',
      fun:(str:string):boolean => {
        let flag = true
        const reg =/(?![\da-fA-F]+)./g
        const ilen = str.length
        if(ilen < 1 || ilen > 4 || reg.test(str)){
          flag = false
        }
        return flag
      },
      length:8
    }
  }
  let res = 'Neither'
  Object.keys(ipMAP).forEach(item => {
    if(exec(ipMAP[item as keyof map],queryIP) ){
      res = item
    }
  })
  return res
};
console.log(validIPAddress("1e1.4.5.6"));
