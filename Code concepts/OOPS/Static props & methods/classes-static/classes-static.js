class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  static calcAge(user) {
    return `Hey ${user.name}- this is confidential, your age is ${user.age}`;
  }
}

let maniObj = new Person("mani", 25, "female");
let seriObj = new Person("seri", 27, "female");
let rahulobj = new Person("rahul", 30, "male");

let persons = [maniObj, seriObj, rahulobj];

console.log(persons.map(Person.calcAge));
