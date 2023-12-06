
  // Promise
const myPromise=new Promise((resolved,rejected)=>{
  const user=null;
  if(!user){
    rejected('SomeThing Wrong')
  }else{
    resolved('Promise Return Succesfully')
  }
})
myPromise.then((res)=>console.log(res)).catch((err)=>console.log(err))