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

const maker = new carMaker("VW");
const maker2 = new carMaker("Mercedes");
maker.setCarMakerName("BMW");
console.log(maker.getCarMakerName());
console.log(maker == maker2);