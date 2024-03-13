console.log("Start Cooking"); // Task 1

setTimeout(() => {
  console.log("Oven is ready!"); // Task 2 (Asynchronous)
}, 2000);

console.log("Continue Chopping"); // Task 3

///USING PROMISE

console.log("Start Execution"); // Task 1
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Resolved!"); // Task 2 (Asynchronous)
  }, 2000);
});

myPromise.then((result) => {
  console.log(result);
//   console.log("Continue Execution");
});
console.log("Continue Execution");


//CALLBACK
console.log("Start Fetching Data"); // Task 1
function fetchData(callback) {
  setTimeout(() => {
    const data = { message: "Data received!" };
    callback(data); // Task 2 (Asynchronous)
  }, 3000);
}

fetchData((data) => {
  console.log(data); // Task 3 (Callback)
// console.log("Continue Processing"); // Task 4

});

console.log("Continue Processing"); // Task 4

//ASYNC/AWAIT
console.log("Start Execution"); // Task 1
function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise Resolved!"); // Task 2 (Asynchronous)
    }, 2000);
  });
}

async function executeAsync() {
  await delayedPromise().then((result) => {
    console.log(result); // Task 3 (Asynchronous)
  });
}
executeAsync();
console.log("Continue Execution"); // Task 4



console.log("Start Execution"); // Task 1
const myPromise2 = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Promise Resolved!"); // Task 2 (Asynchronous)
        }, 2000);
    });
}


const result = await myPromise2();
console.log(result)

console.log("Continue Execution");
