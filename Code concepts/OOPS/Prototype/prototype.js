/*
    whenever we create any object, either it is a simple variable with string value 
    or array or object or boolean, Javascript engine pushes the hidden properties into an object and 
    attaches this object to my custom created object.

    Inorder to access that attached object, we need to use __proto__ property on custom created object.
    This __proto__ property internally points to the Object.prototype or Array.prototype or String.Prototype based on type of your variable.

*/

let obj = {
  name: "mani",
  age: 25,
};

console.log(obj.__proto__); //points internally to Object.prototype
console.log(Object.prototype);
console.log(obj.__proto__ === Object.prototype);

let arr = [1, 2, 3, 4];

console.log(arr.__proto__); //points internally to Array.prototype
console.log(Array.prototype);
console.log(arr.__proto__ === Array.prototype);

let str = "mani";

console.log(str.__proto__); //points internally to String.prototype
console.log(String.prototype);
console.log(str.__proto__ === String.prototype);

let bool = true;

console.log(bool.__proto__); //points internally to Boolean.prototype
console.log(Boolean.prototype);
console.log(bool.__proto__ === Boolean.prototype);

let func = function () {
  return 2 * 2;
};

console.log(func.__proto__);
console.log(Function.prototype);
console.log(func.__proto__ === Function.prototype);

/* Everything in JavaScript is an object - why? 

    The Array.prototype or String.prototype or Boolean.prototype have its own proto which internlly points to the Object.prototype

*/

console.log(Array.prototype.__proto__);
console.log(String.prototype.__proto__);
console.log(Boolean.prototype.__proto__);
console.log(Object.prototype);

console.log(Array.prototype.__proto__ === Object.prototype);
console.log(String.prototype.__proto__ === Object.prototype);
console.log(Boolean.prototype.__proto__ === Object.prototype);

/* So all objects in javascript at the end, points to Object.prototyppe 

    But what does Object.prototype points to? 

    It gives null as it is end of the chain.

*/

console.log(Object.prototype.__proto__);

/*
    custom array --> Array.prototype --> Object.prototype --> null

        customArray.__proto__           --> Array.prototype
        Array.prototype.__proto__       --> Object.prototype
        Object.prototype.__proto__      --> null
        
*/

let arr1 = [1,2,3,4];


//PROTOTYPE CHAINING
console.log(arr1.__proto__.__proto__);
console.log(Object.prototype);
console.log(arr1.__proto__.__proto__ === Object.prototype);

console.log(arr1.__proto__.__proto__.__proto__ === null);



