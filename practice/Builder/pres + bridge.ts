class Car {
    seats: number;
    tripComputer: boolean;
    gps: string;
}

class CarManual {
    seats: number;
    tripComputer: boolean;
    gps: string;
}

interface Builder {
    reset: () => void;
    setSeats: (seats: number) => void;
    setTripComputer: (computer: boolean) => void;
    setGPS: (gps: string) => void;
    getResult();
}

class CarBuilder implements Builder {
    private car: Car;
    reset() {
        this.car = new Car();
    }

    setSeats(seats: number) {
        this.car.seats = seats;
    }
    setTripComputer(computer: boolean) {
        this.car.tripComputer = computer;
    }
    setGPS(gps: string) {
        this.car.gps = gps;
    }

    getResult(): Car {
        const car = this.car;
        this.reset();
        return car;
    }
}

class CarManualBuilder implements Builder {
    private carManual: CarManual;
    reset() {
        this.carManual = new CarManual();
    }

    setSeats(seats: number) {
        this.carManual.seats = seats;
    }
    setTripComputer(computer: boolean) {
        this.carManual.tripComputer = computer;
    }
    setGPS(gps: string) {
        this.carManual.gps = gps;
    }

    getResult(): CarManual {
        const manual = this.carManual;
        this.reset();
        return manual;
    }
}

class Director{
    constructor(private builder: Builder) {}
    constructSportsCar() {
        this.builder.reset();
        this.builder.setSeats(2);
        this.builder.setTripComputer(true);
        return this.builder.getResult();
    }
}

const carBuilder = new CarBuilder();
const carDirector = new Director(carBuilder);

carDirector.constructSportsCar();

carDirector.constructSportsCar();

const car = carBuilder.getResult();

const carManualBuilder = new CarManualBuilder();
const carManualDirector = new Director(carManualBuilder);

carManualDirector.constructSportsCar();

const carManual = carManualBuilder.getResult();
