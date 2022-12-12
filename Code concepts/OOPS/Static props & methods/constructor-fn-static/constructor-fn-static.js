function Person(name, age, totalLPA) {
  this.name = name;
  this.age = age;
  this.totalLPA = totalLPA;
}

/* This will be static method which can't be accessed in object instances but only
 through constructor function
 
 this in static function points to Person constructor function as you are calling 
 the function using Person.calcSalaryHike
 
 */

Person.calcSalaryHike = function (user) {
  let hikePercent = user.totalLPA * (50 / 100);
  return `This is confidential - The salaryhike per annum is ${
    user.totalLPA + hikePercent
  }`;
};

let maniObj = new Person("mani", 24, 350000);
let seriObj = new Person("seri", 25, 780000);
let raviObj = new Person("ravi", 30, 970000);

let persons = [maniObj, seriObj, raviObj];

console.log(persons.map(Person.calcSalaryHike));
