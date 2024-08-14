let myHeros = ["thor", "Spiderman"];

let heroPower = {
    thor: "Power",
    spiderman: "Sling"  ,

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


Object.prototype.hitesh = function(){
    console.log(`This object is present in all objects`);
}


// heroPower.hitesh();

myHeros.hitesh();

