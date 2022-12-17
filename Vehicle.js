class Vehicle {
    constructor (_category, _maker, _numWheels, _energy) {
        this._category = _category;
        this._maker = _maker;
        this._numWheels = _numWheels;
        this._energy = _energy;
    }

    get description () {
        console.log(`This is a ${this.maker} ${this.category} with ${this.numWheels} wheels and ${this.energy} energy`);
    }

    get category() {
        return this._category;
    }

    get numWheels () {
        return this._numWheels;
    }

    get energy () {
        return this._energy;
    }

    get maker () {
        return this._maker;
    }

    refill () {
        console.log(`Refilling the vehicle`);
    }
}

class ElectricCar extends Vehicle {
    constructor (maker) {
        super("car", maker, 4, "electric")
    }

    refill () {
        console.log(`Refilling the electric car`);
    }
}

const electricCar1 = new ElectricCar("Tesla");
electricCar1.description;
electricCar1.refill();