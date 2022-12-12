/* Constructor functions - Constructor functions are special functions which are invoked using new keyword.
  These are used to create multiple object instances 

    Uses : Used to create multiple object instances without repeating the same step again and again.
*/

/* ************* CREATING Constructor FUNCTIONS ************* */

/* Two conventions to follow 
    1) Constructor functions should be named with capital letter by convention.
    2) Constructor functions should be created using new keyword.


******** What does new keyword do/ *********

1) A new empty object is created.
2) The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function. 
    meaning in below example --> maniObj.__proto__ and seriObj.__proto__ === ConstructorFunctions.prototype
3)The ‘this’ variable is made to point to the newly created object. 
  It binds the property which is declared with ‘this’ keyword to the new object.


*/

function ConstructorFunctions(fullName, age) { 
  this.empName = fullName;
  this.empAge = age;
 
}

//Functions added to the prototype will be shared among all the object instances.
ConstructorFunctions.prototype.greetMsg = function () {
  console.log(`hello ${this.empName}`);
};

let maniObj = new ConstructorFunctions("mani", 23);
let seriObj = new ConstructorFunctions("seri", 23);
console.log(maniObj, seriObj);

maniObj.greetMsg();
seriObj.greetMsg();

//Updating the method

console.log(ConstructorFunctions.prototype);

ConstructorFunctions.prototype.greetMsg = function () {
  console.log(`updated greet msg- Hi ${this.empName}`);
};

maniObj.greetMsg();
seriObj.greetMsg();

console.log(maniObj instanceof ConstructorFunctions);

//Using the new keyword links the prototype of constructor fucntion to the __proto__ property of instances.
console.log(ConstructorFunctions.prototype === maniObj.__proto__);


/* ************* CONSTRUCTOR FUNCTIONS WITHOUT USING NEW KEYWORD  **************/

function ConstructorFnWithoutNew(name, age) {
  this.empName = name;
  this.empAge = age;
  return this;
}

/* Here empName and empAge are added to the window object as this inside the regular function points to window object 

so the change in property of any object instances chnages the all as there is no speperate object instnaces has been created. 
they are chnaged directly on the window object.

*/

//Empname and  age are tagged to mani and 25 after this step
let maniObjWithoutNew = ConstructorFnWithoutNew("Mani", 25);
//But doing the below step will override the empname and age in window object to seri and 25
let seriObjWithoutNew = ConstructorFnWithoutNew("seri", 25);
//Both gives the empname and age as seri and 25
console.log(maniObjWithoutNew, seriObjWithoutNew);

//instance of operator returns true if the prototype property of a constructor appears anywhere in the prototype chain of an object.
//which happens when object instance is created with new keyword.
console.log(maniObjWithoutNew instanceof ConstructorFnWithoutNew);

// doesn't links the prototype of constructor fucntion to the __proto__ property of instances as new keyword is not used while invoking.
console.log(ConstructorFnWithoutNew.prototype === maniObjWithoutNew.__proto__);

/* To conclude 


New keyword in JavaScript is used to create an instance of an object that has a constructor function.
On calling the constructor function with ‘new’ operator, the following actions are taken:

1) A new empty object is created.
2) The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
3)The ‘this’ variable is made to point to the newly created object. 
  It binds the property which is declared with ‘this’ keyword to the new object.

 hence the constructor function should always be invoked using new keyword.


*/



