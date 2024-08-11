// 01. Abstraction example 
class Car {
    constructor(brand, modal){
        this.brand = brand;
        this.modal = modal;
    }

    startEngine(){
        console.log("Engine Started");
    }

    drive(){
        console.log("Driving the car");
    }

}

// Usage

const myCar = new Car('Toyato', 'Corolla');
myCar.startEngine();
myCar.drive();






