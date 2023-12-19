interface Graphic {
    move: (x: number, y: number) => void;
    draw: () => void;
}

class Dot implements Graphic {
    protected canvas = document.createElement('canvas');

    constructor(protected x: number, protected y: number) {
    }

    move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }

    draw() {
        const ctx = this.canvas.getContext('2d');

        ctx.arc(this.x, this.y, 1, 1, 1);

        ctx.fill();

        ctx.beginPath();
    }
}

class Circle extends Dot {
    constructor(protected x: number, protected y: number, private radius: number) {
        super(x, y);
    }

    draw() {
        const ctx = this.canvas.getContext('2d');

        ctx.arc(this.x, this.y, this.radius, 1, 1);

        ctx.fill();

        ctx.beginPath();
    }
}

class CompoundGraphic implements Graphic{
    private children: Graphic[];
    add(child: Graphic) {
        this.children.push(child);
    }

    remove(child:Graphic) {
        this.children.splice(this.children.indexOf(child), 1);
    }

    draw() {
        this.children.forEach(graphic => graphic.draw());
    }

    move(x:number, y:number) {
        this.children.forEach(component => component.move(x, y));
    }
}

class ImageEditor {
    all: CompoundGraphic;

    load() {
        this.all = new CompoundGraphic();
        this.all.add(new Dot(1, 2));
        this.all.add(new Circle(1, 2, 3));
        // ...
    }

    groupSelected(components: Graphic[]) {
        const group = new CompoundGraphic();

        components.forEach((component) => {
            group.add(component);
            this.all.remove(component);
        });

        this.all.add(group);

        this.all.draw();
    }
}
