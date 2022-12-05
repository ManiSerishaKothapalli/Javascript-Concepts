let print1Promise = function print1(iscallback) {
    return new Promise((resolve,reject) => {
        if (iscallback) {
            setTimeout(() => {
              console.log("This is from print1");
              return resolve();
            }, 1000);
            return;
          }
            return reject();

    })
  }

  function errorMSg(){
    console.log("something is wrong in print1");
  }

function print2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("This is from print2");
            return resolve();
          }, 2000);
    })
  }

  function print3() {
    setTimeout(() => {
      console.log("This is from print3");
    }, 3000);
  }

  print1Promise(true).then(print2).then(print3)

/* ------------------------------Nested promises ---------------------------------------*/

/* here print1 returns a promise and on success state (resolve) and then I'm printing that resolve is emiting
 which is success1 in this state. only after printing success1 .I want to make a call to print2.
 So I have created a seperate promise for emitted value success1. So after printing that only make a call to print2

*/

// function print1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success1");
//     }, 1000);
//   }).then((val) => {
//     print2();
//     console.log(val);
//   });
// }

// function print2(val) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("success2");
//       console.log(val);
      
//     }, 2000);
//   });
// }

// print1();



/* what if we wish to print success2 and then success1 but condition is that success1 should be called first
   To achieve this I have to call print1 first and then I get the resolved state as success1 .
   but I don't want to print it. Instead I wanted to call print2 and then print success1.. 
   so I will pass the val parameter into print2 and then after logging success2, I will print the success1

*/

// function print1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success1");
//     }, 1000);
//   }).then((val) => {
//     print2(val);
// console.log(val);
//   });
// }