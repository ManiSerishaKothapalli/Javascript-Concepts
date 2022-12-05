/* Here I have passed iscallback just to check how arguments will be passed into function.
  next param is a callback function. which in case will be print2 .since print2 accepts a callback. 
  I have passed print3 as callback function.

*/
function print1(iscallback, callback,errorcallback) {
  if (iscallback) {
    setTimeout(() => {
      console.log("This is from print1");
      return callback(print3); //This is called callback becuase it waits until print1 is exceuted completely
    }, 1000); //and then makes a call to callback function which is print2 in this case.
    return;
  }
  // console.log("something is wrong in print1"); //say for example instead of this consolelog...
    return errorcallback();                                            //if we need to call one more callback function
}


function errorMSg(){
  console.log("something is wrong in print1");
}

function print2(callback) {
  setTimeout(() => {
    console.log("This is from print2");
    return callback();
  }, 2000);
}

function print3() {
  setTimeout(() => {
    console.log("This is from print3");
  }, 3000);
}

print1(false, print2,errorMSg);


/* SO this includes nesting of callbacks which will be called as callback hell after multiple nesting .
To have more readibility, we have promises which is a es6 feature. */