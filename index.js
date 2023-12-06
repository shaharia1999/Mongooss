// Promise handaleing method with Node js
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
myPromise
  .then((res) => console.log("then" + res))
  .catch((err) => console.log(err));

// maltiful Promise asyn need to promise all function
const userIds = [1, 2, 3, 4, 5];
let userData = [];
for (let i = 0; i < userIds.length; i++) {
  const userId = userIds[i];
  userData.push(myPromise);
}
Promise.all(userData).then((res) => console.log(res));

// async await
const promise = new Promise((resoled, rejected) => {
  setTimeout(() => {
    resoled("success");
  }, 100);
});

async function getData() {
  const res = await promise;
  console.log(res);
}
getData();

function normal() {
  promise.then((res) => console.log(res));
}
normal();
