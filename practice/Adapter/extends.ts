class Vehicle {
    move() {
        console.log('Moving...');
    }
}

class Car extends Vehicle {
    drive() {
        console.log('Car is driving...');
    }
}

class Boat extends Vehicle {
    sail() {
        console.log('Boat is sailing...');
    }
}

class FuelConsumptionAdapter extends Vehicle {
    constructor(private vehicle: Vehicle) {
        super();
    }

    move() {
        this.vehicle.move();
    }

    getFuelConsumption() {
        if (this.vehicle instanceof Car) {
            return '10L/100km';
        }

        if (this.vehicle instanceof Boat) {
            return '30L/100km';
        }

        return 'Unknown';
    }
}


const car = new Car();
const adaptedCar = new FuelConsumptionAdapter(car);
adaptedCar.move();  // Output: Car is driving...
console.log(adaptedCar.getFuelConsumption());  // Output: 10L/100km

const boat = new Boat();
const adaptedBoat = new FuelConsumptionAdapter(boat);
adaptedBoat.move();  // Output: Boat is sailing...
console.log(adaptedBoat.getFuelConsumption());  // Output: 30L/100km

