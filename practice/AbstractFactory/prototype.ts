
export interface Cloneable<T> {
    clone(): T;
}

interface Button extends Cloneable<Button>{
    render: () => void;
}

interface Checkbox extends Cloneable<Checkbox>{
    render: () => void;
}

class WinButton implements Button {
    clone() {
        return new WinButton();
    }
    render() {
        console.log('win button is rendered');
    }
}
class MacButton implements Button {
    clone() {
        return new MacButton();
    }
    render() {
        console.log('mac button is rendered');
    }
}

class WinCheckbox implements Checkbox {
    clone() {
        return new WinCheckbox();
    }
    render() {
        console.log('win checkbox is rendered');
    }
}
class MacCheckbox implements Checkbox {
    clone() {
        return new MacCheckbox();
    }
    render() {
        console.log('mac checkbox is rendered');
    }
}

abstract class GUIFactory {
    protected abstract button: Button;
    protected abstract checkbox: Checkbox;
    createButton() {
        return this.button.clone();
    }

    createCheckbox() {
        return this.checkbox.clone();
    }
}

class WinFactory extends GUIFactory {
    protected button: Button = new WinButton();
    protected checkbox: Checkbox = new WinCheckbox();
}

class MacFactory extends GUIFactory {
    protected button: Button = new MacButton();
    protected checkbox: Checkbox = new MacCheckbox();
}

class Application {
    private factory: GUIFactory;
    private button: Button;

    constructor(factory: 'Mac' | 'Win') {
        if (factory === 'Win') {
            this.factory = new WinFactory();
        }else if (factory === 'Mac') {
            this.factory = new MacFactory();
        }else {
            throw new Error('Invalid factory');
        }
        this.button = this.factory.createButton();
    }

    render() {
        this.button.render();
    }
}

new Application('Mac').render();
