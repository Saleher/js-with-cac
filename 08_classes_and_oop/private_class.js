class Circle{
    //Private 
    #radius;

    constructor(radiusValue){
        this.#radius = radiusValue;
    }

    get area(){
        return Math.PI * Math.pow(this.#radius, 2)
    }
}

const circle1 = new Circle(10);
console.log(circle1.area)
// console.log(circle1.#radius) // Not accessable 