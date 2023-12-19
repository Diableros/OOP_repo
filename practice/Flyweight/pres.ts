class TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string,
  ) {}

  draw(canvas: HTMLCanvasElement, x: number, y: number) {
    const context = canvas.getContext('2d');
    if (context) {
      context.fillStyle = this.color;
      context.fillRect(x, y, 50, 100);
    }
  }
}

class TreeFactory {
  static treeTypes: TreeType[] = [];
  static getTreeType(name: string, color: string, texture: string): TreeType {
    let type = this.treeTypes.find(
      type =>
        name === type.name && color === type.color && texture === type.texture,
    );
    if (type == null) {
      type = new TreeType(name, color, texture);
      this.treeTypes.push(type);
    }

    return type;
  }
}

class Tree {
  constructor(
    public x: number,
    public y: number,
    public type: TreeType,
  ) {}

  draw(canvas: HTMLCanvasElement) {
    this.type.draw(canvas, this.x, this.y);
  }
}

class Forest {
  public trees: Tree[] = [];

  plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string,
  ) {
    const type = TreeFactory.getTreeType(name, color, texture);

    const tree = new Tree(x, y, type);

    this.trees.push(tree);
  }

  draw(canvas: HTMLCanvasElement) {
    this.trees.forEach(tree => tree.draw(canvas));
  }
}

const forest = new Forest();

for (let i = 0; i < 1000000; i++) {
  forest.plantTree(1, i, 'Christmas tree', 'green', 'Christmas decoration');
}

for (let i = 0; i < 2000000; i++) {
  forest.plantTree(2, i, 'Елка', 'зеленая', 'новогодняя');
}

for (let i = 0; i < 3000000; i++) {
  forest.plantTree(2, i, 'Елка 2', 'зеленая', 'новогодняя');
}

console.log(forest.trees.length, TreeFactory.treeTypes.length);
