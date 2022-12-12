class Person{
    constructor(name,birthyear,gender){
        this.name = name;
        this.birthyear = birthyear;
        this.gender = gender;
    }

    calcAge(){
        let age = new Date().getFullYear() - this.birthyear;
        return age
    }

    greet(){
        return `Welcome ${this.name}, how are you doing! ....Your age is ${this.calcAge()}`
    }
}


class Employee extends Person{
    constructor(empname,empBirthyear,empGender,company,salary){
        super(empname,empBirthyear,empGender);
        this.company = company;
        this.salary = salary;
    }


    /* Polyorphism- Here are overriding the base class(Person) greet method in child class*/
    greet(){
        return `Welcome ${this.name}, You are now onboarded with salary ${this.salary} per month`
    }


}

let mani = new Employee('mani',1998,'Female','TCS',60000);

/* It checks for calcAge method since it is not available in child class, it goes up the prototypical chain and checks in Person class 
since it is present over there, it exceutes*/

console.log(mani.calcAge()); 

/* It checks for greet method since it is available in child class it exceutes from there*/
console.log(mani.greet());


