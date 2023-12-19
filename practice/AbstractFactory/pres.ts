type Person = {
    seat: (object: Sofa | Chair) => void,
    sleepOn: (sofa: Sofa) => void
}

interface Chair {
    hasLegs: (person: Person) => boolean
    seatsOn: (person: Person) => void
    readonly seats: 1
}

interface Sofa {
    hasLegs: () => boolean
    seatsOn: (person: Person) => void
    sleepOn: (person: Person) => void
    readonly seats: 3
}

interface CoffeeTable {
    hasLegs: () => boolean
    putOn: () => void
}


class ArtDecoChair implements Chair {
    readonly seats = 1

    softness: number

    hasLegs(){
        return true
    }

    seatsOn(person: Person) {
        return person.seat(this)
    }
}
class VictorianChair implements Chair {

    readonly seats = 1

    buttons: number

    hasLegs(){
        return true
    }

    seatsOn(person: Person) {
        return person.seat(this)
    }
}
class ModernChair implements Chair {
    readonly seats = 1

    material: 'plastic' | 'wooden' | 'stone'

    hasLegs(){
        return true
    }

    seatsOn(person: Person) {
        return person.seat(this)
    }
}


class ArtDecoSofa implements Sofa {
    readonly seats = 3

    softness: number

    hasLegs(){
        return true
    }

    seatsOn(person: Person) {
        return person.seat(this)
    }

    sleepOn(person: Person) {
        return person.sleepOn(this)
    }
}
class VictorianSofa implements Sofa {

    readonly seats = 3

    buttons: number

    hasLegs(){
        return true
    }

    seatsOn(person: Person) {
        return person.seat(this)
    }

    sleepOn(person: Person) {
        return person.sleepOn(this)
    }
}

class ModernSofa implements Sofa {
    readonly seats = 3

    material: 'plastic' | 'wooden' | 'stone'

    hasLegs(){
        return true
    }
    seatsOn(person: Person) {
        return person.seat(this)
    }

    sleepOn(person: Person) {
        return person.sleepOn(this)
    }
}


class ArtDecoCoffeeTable implements CoffeeTable {
    hasLegs(){
        return true
    }

    putOn(){

    }
}


class VictorianCoffeeTable implements CoffeeTable {
    hasLegs(){
        return true
    }

    putOn(){

    }
}


class ModernCoffeeTable implements CoffeeTable {
    hasLegs(){
        return true
    }

    putOn(){

    }
}

interface FurnitureFactory {
    createChair: () => Chair
    createSofa: () => Sofa
    createCoffeeTable: () => CoffeeTable
}

class ArtDecoFurniture implements FurnitureFactory{
    createChair(){
        return new ArtDecoChair()
    }

    createSofa() {
        return new ArtDecoSofa()
    }

    createCoffeeTable() {
        return new ArtDecoCoffeeTable()
    }
}

class VictorianFurniture implements FurnitureFactory{
    createChair(){
        return new VictorianChair()
    }

    createSofa() {
        return new VictorianSofa()
    }

    createCoffeeTable() {
        return new VictorianCoffeeTable()
    }
}

class ModernFurniture implements FurnitureFactory{
    createChair(){
        return new ModernChair()
    }

    createSofa() {
        return new ModernSofa()
    }

    createCoffeeTable() {
        return new ModernCoffeeTable()
    }
}

class Application {
    style: 'ArtDeco' | 'Modern' | 'Victorian';

    chair: Chair

    sofa: Sofa

    coffeeTable: CoffeeTable

    furnitureFactory: FurnitureFactory

    constructor(style: 'ArtDeco' | 'Modern' | 'Victorian') {
        this.style = style;
        this.initialize();
    }

    initialize() {
        if (this.style === 'ArtDeco') {
            this.furnitureFactory = new ArtDecoFurniture();
        }
        if (this.style === 'Modern') {
            this.furnitureFactory = new ModernFurniture();
        }
        if (this.style === 'Victorian') {
            this.furnitureFactory = new VictorianFurniture();
        }

        this.chair = this.furnitureFactory.createChair()
        this.sofa = this.furnitureFactory.createSofa()
        this.coffeeTable = this.furnitureFactory.createCoffeeTable()
    }
}

new Application('ArtDeco')