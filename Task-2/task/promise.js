

const mypromise = new Promise((resolve,reject)=>{

  let data = 0;

  if(data){
    resolve("data is secure");
  }
  else{
    reject("data contain error");
  }
})

mypromise.then(result => console.log(result))
.catch(err => console.log(err))



