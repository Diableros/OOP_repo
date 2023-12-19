export abstract class PackageComponent {
    constructor(public title: string) {}
    public add(packageComponent: PackageComponent): void {}
    public remove(packageComponent: PackageComponent): void {}

    public isComposite(): boolean {
        return false;
    }

    public abstract getPrice(): number;
}

export class ProductLeaf extends PackageComponent {
    constructor(title: string, protected price: number) {
        super(title);
    }

    public getPrice(): number {
        return this.price;
    }
}

class MultiPackageComposite extends PackageComponent {
    protected childrenPackages: PackageComponent[] = [];

    public add(packageComponent: PackageComponent): void {
        this.childrenPackages.push(packageComponent);
    }

    public remove(packageComponent: PackageComponent): void {
        const index = this.childrenPackages.indexOf(packageComponent);
        this.childrenPackages.splice(index, 1);
    }

    public isComposite(): boolean {
        return true;
    }

    public getPrice(): number {
        return this.childrenPackages.reduce((prev, curr) => prev + curr.getPrice(), 0);
    }
}

const galaxyPackage: PackageComponent = getGalaxyS68Pack();
const canonPackage: PackageComponent = getCanonM50Pack();
const simpleHeadphonesPackage: PackageComponent = getHeadphones();

const mainShipment: PackageComponent = new MultiPackageComposite('Main Shipment');
mainShipment.add(galaxyPackage);
mainShipment.add(canonPackage);
mainShipment.add(simpleHeadphonesPackage);

console.log(`Total shipment cost: ${mainShipment.getPrice()}€`);

function getGalaxyS68Pack(): PackageComponent {
    const complexMobilePackage = new MultiPackageComposite('Galaxy S68 Pack');
    complexMobilePackage.add(new ProductLeaf('Galaxy S68', 900));
    complexMobilePackage.add(new ProductLeaf('S68 Charger', 25));
    complexMobilePackage.add(new ProductLeaf('S68 Case', 15));
    return complexMobilePackage;
}

function getCanonM50Pack(): PackageComponent {
    const complexCameraPackage = new MultiPackageComposite('Canon M50 Pack');
    complexCameraPackage.add(new ProductLeaf('Canon M50', 600));
    complexCameraPackage.add(new ProductLeaf('A50 1.8 Lens', 250));
    complexCameraPackage.add(new ProductLeaf('128 Gb Micro SD', 40));
    complexCameraPackage.add(new ProductLeaf('Canon Generic Case', 150));
    return complexCameraPackage;
}

function getHeadphones(): PackageComponent {
    return new ProductLeaf('HyperX Cloud Flight', 150);
}
