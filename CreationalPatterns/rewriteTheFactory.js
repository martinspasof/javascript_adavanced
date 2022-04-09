const carMaker = function (carMakerName) {
    if (typeof carMaker.instance === 'object') {
        return carMaker.instance;
    }

    this._name = carMakerName;

    this.getCarMakerName = function () {
        console.log(`carMakerName is ${this._name}`);
        return this._name;
    }

    this.setCarMakerName = function (name) {
        this._name = name;
    }

    carMaker.instance = this;
    return carMaker.instance;
}

function Car(name, speed) {
    // cache the instance
    var instance = this;

    // set instance properties
    this.name = name || 'Car';
    this.speed = speed || 180;

    // rewrite the constructor
    // Car = function(){
    //   return instance;
    // };

    if (typeof Car.instance === 'object') {
        return Car.instance;
    }

    Car.instance = instance;
}

const maker = new carMaker("VW");
const maker2 = new carMaker("Mercedes");
maker.setCarMakerName("BMW");
maker2.setCarMakerName("Renault");

// lets try to create 2 instances
var car1 = new Car(maker.getCarMakerName(), 200);
var car2 = new Car(maker2.getCarMakerName(), 300);

// test if we have ONLY ONE instance:
console.log(car1 === car2);
