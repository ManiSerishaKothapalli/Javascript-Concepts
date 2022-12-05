/* Debouncing is a pratice which is used to optimize the browser performance. 
It is mostly used in time consuming actions
It avoids the frequent invoking of time consuming tasks.

*/

/*Hypothetically Get data function makes an API call and brings the data
  But if user starts invoking the function again and again , It makes frequent API calls which is highly expensive.
  and also leads to performance issues to browser like freezing browser tab.

*/

function getData() {
  console.log("This is the product data from API");
}

/* To avoid the above scenario we have created a new optimized function "DEBOUNCE", 
which takes the function which makes api calls and optimizes it

Debounce function takes two params- 
1)function which has to be optimized.
2)delay or timer limit.


here below in this exmaple we have given the timer to be 5000milli seconds = 5seconds.
so when user first clicks the button it starts the timer of 5 seconds. and display the result
say if user presses the button before 5seconds it again starts the timer from beginning.
so since the timer again starts from beginning, we have skipped that call.


The ideal case is that this calls getdata once the complete 5seconds is completed.
but we are again clicking the button and starting the timer again from beginning.

*/

const debounce = (regFunc, delay) => {
  let timer = 0;
  console.log(
    timer
  ); /* Without the event click happens ...why is it calling the debounce function*/

  return () => {
    // let context = this;
    // args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      regFunc();
    }, delay);
  };
};

getProductData = debounce(getData, 5000);

/*   But in the above approach- one disadvantge is that the user has to wait even for first click
-ideally this should not happen. The first click should happen as always and then check the conditions from next click.

*/

// debounce = (regFunc, delay) => {
//   let timer;
//   console.log(timer);

//   return () => {
//     if (!timer) {
//       regFunc();
//     }
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       timer = undefined;
//     }, delay);
//   };
// };
