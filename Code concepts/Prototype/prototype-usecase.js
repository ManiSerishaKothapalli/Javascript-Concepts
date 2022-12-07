/*
    let's discuss few use cases where prototype can be used.
    
*/

//1) ******* -  Adding method to prototype to use it in the project. - ********

let users = ["mani","seri","deepthi"];
let Location = ['hyderabad','kolkata','banglore'];

console.log(users.__proto__ === Array.prototype);
console.log(Location.__proto__ === Array.prototype);

/*
    From the above we can notice that both users array and location array proto is pointing to the same prootype.
    So we can add any common custom method or property to Array.prototype so that it can be used over all the arrays that we create.

*/


Array.prototype.commonMethod= function(array){
    console.log('This is a common method for all arrays', array)
}

users.commonMethod(users);

//2) ******* -  Using in constructor function  - ********

function constructorFn(name,age){
    this.name = name;
    this.age = age;
}


let emp1 = new constructorFn('deepthi', 30);
let emp2 = new constructorFn('Rahul', 32);
constructorFn.prototype.greet = function (){
    console.log(`Hi ${this.name}, how are you`);
    
}

emp1.greet();
emp2.greet();

// createuser, roles Permissions, arising utils, excel allowable values.