walkEle(document.body)

function walkEle(ele){
  logEle(ele)
  if(!ele.children) return 
  for(let i = 0 ;i < ele.children.length;i++){
    const item = ele.children[i]
    walkEle(item)
  }
}

function logEle(ele){
   console.log(ele);
  console.log(ele.offsetHeight);
  console.log(ele.offsetTop);
}
