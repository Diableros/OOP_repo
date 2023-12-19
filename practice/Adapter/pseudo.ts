class RoundHole{
    constructor(private radius: number) {

    }

    getRadius() {
        return this.radius;
    }

    fits(peg: RoundPeg) {
        return this.getRadius() >= peg.getRadius();
    }
}

class RoundPeg{
    constructor(private radius: number) {
    }

    getRadius() {
        return this.radius;
    }
}

class SquarePeg{
    constructor(private width: number) {
    }

    getWidth() {
        return this.width;
    }
}

class SquarePegAdapter extends RoundPeg {
    constructor(private peg: SquarePeg) {
        super(0);
    }

    getRadius() {
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    }
}


const hole = new RoundHole(5);
const rpeg = new RoundPeg(5);

hole.fits(rpeg); // true

const smallSqpeg = new SquarePeg(5);
const largeSqpeg = new SquarePeg(10);

// hole.fits(smallSqpeg); // error

const smallSqpegAdapter = new SquarePegAdapter(smallSqpeg);
const largeSqpegAdapter = new SquarePegAdapter(largeSqpeg);

console.log(hole.fits(smallSqpegAdapter)); // TRUE
console.log(hole.fits(largeSqpegAdapter)); // FALSE

