function Person(name, birthyear, gender) {
  this.name = name;
  this.birthyear = birthyear;
  this.gender = gender;

}

Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthyear;
};

function Employee(empname, empbirthyear, empgender, empid, salary, company) {


  /* ***********Inherting the properties of Person constructor function **********

    here in the person when we have this.name, we want to bind that this to the employee object instance that is created.

    When you call the fucntion directly person(empname, empbirthyear, empgender) this inside Person constructor function is window, 
    so they get attached to window object instaed of to object instances.
  */

  Person(empname, empbirthyear, empgender);
  //   Person.call(this, empname, empbirthyear, empgender);
  this.empid = empid;
  this.salary = salary;
  this.company = company;
}


/* *********** Inherting the prototype methods of Person constructor function **********

Although this (Employee.prototype =Person.prototype;) works, it is not recommended to do as here you are referncing to same object but not inheriting the prototypes 
which is not advisable.Using this we are assigning the prototype of person to employee, but not inheriting from the person.

while we do the object.create, the calcAge is not there in the mani obj , it is not even there in it's prototype...
But using Object.create we have linked the prototype of employee with person...so now the calcAge exists in person prototype and it inherites from there...


This is called inheritance.

*/

// Employee.prototype =Person.prototype;
// console.log(Employee.prototype);


Employee.prototype = Object.create(Person.prototype);
console.log(Employee.prototype);

Employee.prototype.calcSalary = function () {
  return this.salary * 12;
};

let mani = new Employee("mani", 1998, "female", 1770313, 45000, "Nexa");
console.log(mani);

console.log(mani instanceof Employee, mani instanceof Person);
