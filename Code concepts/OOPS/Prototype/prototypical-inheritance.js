function Person(name, birthyear, gender) {
  this.name = name;
  this.birthyear = birthyear;
  this.gender = gender;
}

Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthyear;
};

let maniObj = new Person("mani", 1998, "female");
let seriObj = new Person("seri", 1999, "female");
console.log(maniObj, seriObj);

console.log(maniObj.calcAge(), seriObj.calcAge());

/* 

    *******Object instance inheriting the methods of Constructor function*******

    From here we can say that although the object instances don't have the calcAge attached directly to the object
    we can able to access them directly by saying maniObj.calcAge(), because here the object instances inherits the Person prototype.
    This is callled Prototypical inheritance.


      *******Constructor function inheriting the methods of other Constructor function*******
      *******ES6 classes inheriting the methods of other ES6 classes*******
    The prototypical inhertance between constructor functions and classes can be found in inheritace folder.
    Refer to nisha singla video mentioned here after learning that

*/
