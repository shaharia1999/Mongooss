// Promise handaleing method with Node js
const {errorHandler}=require('./errorhandelar.js')
const myPromise = new Promise((resolved, rejected) => {
  const user = true;
  if (!user) {
    rejected("SomeThing Wrong");
  } else {
    setTimeout(() => {
      resolved({ name: "shaharia" });
      userData.push({ id: 1 });
    }, 500);
  }
});
// myPromise
//   .then((res) => console.log("then" + res))
//   .catch((err) => console.log(err));

// maltiful Promise asyn need to promise all function
const userIds = [1, 2, 3, 4, 5];
let userData = [];
for (let i = 0; i < userIds.length; i++) {
  const userId = userIds[i];
  userData.push(myPromise);
}
// Promise.all(userData).then((res) =>{
//   return(
//     console.log(res)
//   )
// });

// async await
const promise = new Promise((resoled, rejected) => {
  setTimeout(() => {
    resoled("success");
  }, 100);
});

async function getData() {
  const res = await promise;
  // console.lorsg(res);
}
getData();

function normal() {
  promise.then((res) => console.log(res));
}
// normal();

// Error handling

async function handleError() {
  try {
    undefined.find();
    // create a Error
    const emailError=new Error('Email already Exiest');
    throw emailError
  } catch (err) {
    //  console.log(err);
    errorHandler(err);
  }
}
// function errorHandler(error) {
//   // console.log(error);
//   const { name, message, stack } = error;
//   // console.log(name, message, stack);
//   console.log(name,message);
//   // logger.error({
//   //   name,
//   //   message,
//   //   stack,
//   // });
//   // console.log('Internal server Error');
// }
// handleError();
