/* ES6 classes are just syntactic sugar of constructor fnctions.

1)All the methods and properties that are written outside the constructor will be attached to the prototype, 
which will be shared among all the instances.

2)new keyword links the prototype of class to the __proto__ property of instances.
  So the method inside the prototype can be accessed directly using instances

*/

/* ********************* CREATING A CLASS ******************* */

class Employee {
  constructor(name, age) {
    this.EmpName = name;
    this.EmpAge = age;
  }
  greetMsg() {
    return `Welcome ${this.EmpName}`;
  }
}

emp1 = new Employee("mani", 25);
emp2 = new Employee("seri", 23);
console.log(emp1, emp2);

/* ********************* UPDATING THE METHOD INSIDE PROTOTYPE ******************* */

Employee.prototype.greetMsg = function () {
  return `updated msg - Hi ${this.EmpName}, How are you?`;
};

console.log(emp1.greetMsg());
console.log(emp2.greetMsg());

//using new operator links the prototype of class to __proto__ property of instances
console.log(Employee.prototype === (emp1.__proto__ && emp2.__proto__));

