class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

class Employee extends Person {
  constructor(name, year, salary) {
    //super is equal to Person.call(this,name,year)
    super(name, year);
    this.salary = salary;
  }

  calcSalary() {
    return this.salary * 12;
  }
}

let ManiObj = new Employee("mani", 1998, 25000);
console.log(ManiObj);
console.log(ManiObj.age(), ManiObj.calcSalary());

/*
super keyword in child class is not needed if the child class is not having constructor like as shown below.
class Employee extends Person {

}


here Employee still inherits name and year property from parent class 
*/
