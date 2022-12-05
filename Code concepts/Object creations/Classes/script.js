class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }


    //Use any kind of function - But try to use same kind in below...because if we use arrow in
    //  parent and regular functions in children.Its doesn't override
    details = () => {
        return `He is ${this.name} with age ${this.age}`
    }
}


class Student extends Person{
    constructor(name,age,newName,section){
        super(name,age)
        //overriding the property of parent
        this.name = newName;
        this.section= section
    }

    //Method overriding
    details =  function(){
        return `He is ${this.name} with age ${this.age} and coming from ${this.section}`
    }
    
}

const john = new Person("john",25)
const smith = new Student("john",25,"Smith","development")
console.log(john,john.details());
console.log(smith,smith.details());


  