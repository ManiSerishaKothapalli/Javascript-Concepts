/* Factory functions - Functions which return objects are called factory functions

    Uses : Used to create multiple object instances without repeating the same step again and again.
*/

/* ************* CREATING FACTORY FUNCTIONS ************* */
function factoryFunction(fullname, age) {
  return {
    empName: fullname,
    empAge: age,
    welcomeMsg: function () {
      console.log(`Welcome ${this.empName}!`);
    },
  };
}

let ManiObj = factoryFunction("mani", 25);
let SeriObj = factoryFunction("seri", 31);
console.log(ManiObj, SeriObj);

//Updating the method

ManiObj.welcomeMsg = function () {
  return `this is an updated msg ${this.empName} \n`;
};

SeriObj.welcomeMsg = function () {
  return `this is an updated msg ${this.empName} `;
};

console.log(ManiObj.welcomeMsg(), SeriObj.welcomeMsg());
/*Two issues with above approach

1)memory issue - although welcome is having same logic across all objects, we are creating the function for all the instances.
2)reusability - If we want to change the logic of welcomeMsg, we have to do it for all the instances

So to over come this we use Object.create as shown below
*/

/* ************* CREATING FACTORY FUNCTIONS USING OBJECT.CREATE ************* */

let greetMsgProto = {
  company: "TCS",
  greetMsg: function () {
    console.log(`Welcome ${this.empName}!`);
  },
};

/*Object.create is used to create an object .it takes the prototype as param.
The newely created object will be having with passed prototype

Properties or Methods in the prototype will be shared across all the object instances.

So here prototype contains company,greetMsg which will be shared among all the instances
but others like empName,empAge will be created seperately for all the instances.

*/

function factoryFunctionUsingCreate(fullname, age) {
  let factoryFunc = Object.create(greetMsgProto);
  factoryFunc.empName = fullname;
  factoryFunc.empAge = age;
  return factoryFunc;
}

let RaviObj = factoryFunctionUsingCreate("ravi", 25);
RaviObj.greetMsg();
let RajuObj = factoryFunctionUsingCreate("raju", 31);

// To update the greetMsg function - updating the method or property of prototype in one instance changes everywhere for all instances

RaviObj.__proto__.greetMsg = function () {
  console.log(`updated greetMsg- Hi ${this.empName}`);
};
RajuObj.greetMsg();
RaviObj.greetMsg();
