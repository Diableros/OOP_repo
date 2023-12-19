abstract class Shape {
    x: number;
    y: number;
    color: string;

    protected constructor({ x, y, color }: Omit<Shape, 'clone'>) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    abstract clone(): Shape;
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(source: Omit<Rectangle, 'clone'>) {
        super(source);
        this.height = source.height;
        this.width = source.width;
    }

    public clone(): Rectangle {
        return new Rectangle(this);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(source: Omit<Circle, 'clone'>) {
        super(source);
        this.radius = source.radius;
    }

    public clone(): Circle {
        return new Circle(this);
    }
}

class Application {
    shapes: Shape[];

    constructor() {
        const circle = new Circle({ radius: 10, y: 0, x: 0, color: 'red' });
        const rectangle = new Rectangle({
            width: 10,
            height: 10,
            y: 50,
            x: 0,
            color: 'green',
        });

        const copyCircle = circle.clone();

        this.shapes = [circle, rectangle, copyCircle];
    }
}
