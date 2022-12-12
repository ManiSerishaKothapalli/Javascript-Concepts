
    function Car(car, speed) {
        this.car = car;
        this.speed = speed;

    }

    Car.prototype.accelerate = function () {
        this.speed += 10;
        console.log(`${this.car} is going at ${this.speed} km/h`);

    }

    Car.prototype.brake = function () {
        this.speed -= 5;
        console.log(`${this.car} is going at ${this.speed} km/h`);
    }


    function ElectricCar(car, speed, battery) {
        //Inheriting the properties of parent class
        Car.call(this, car, speed)
        this.battery = battery;
    }

    //Linking the prototypes - inheriting the prototype methods.
    ElectricCar.prototype = Object.create(Car.prototype)

    ElectricCar.prototype.chargeBattery = function (chargeTo) {
        this.battery = chargeTo;
    }


    //Overiding the Parent class method. --> POLYMORPHISM --> one method is having different forms which can be termed as logic.
    ElectricCar.prototype.accelerate = function () {
        this.speed += 25;
        this.battery -= 5;
        console.log(`From child class - ${this.car} is running at ${this.speed}km/h with ${this.battery} charge`);

    }


    let Tesla = new ElectricCar('Tesla', 200, 80);
    Tesla.accelerate(); // picks from it's own class...if it is not found...it goes up the scope chain and inherit from parent.



