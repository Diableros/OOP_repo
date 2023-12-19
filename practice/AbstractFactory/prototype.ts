interface Button {
    render: () => void;
}

interface Checkbox {
    render: () => void;
}

interface Prototype {
    clone(): Prototype;
}

class WinButton implements Button, Prototype {
    clone() {
        return new WinButton();
    }
    render() {
        console.log('win button is rendered');
    }
}
class MacButton implements Button, Prototype {
    clone() {
        return new MacButton();
    }
    render() {
        console.log('mac button is rendered');
    }
}

class WinCheckbox implements Checkbox, Prototype {
    clone() {
        return new WinCheckbox();
    }
    render() {
        console.log('win checkbox is rendered');
    }
}
class MacCheckbox implements Checkbox, Prototype {
    clone() {
        return new MacCheckbox();
    }
    render() {
        console.log('mac checkbox is rendered');
    }
}

interface GUIFactory {
    createButton: () => Button;
    createCheckbox: () => Checkbox;
}

class WinFactory implements GUIFactory {
    button = new WinButton();
    checkbox = new WinCheckbox();
    createButton() {
        return this.button.clone();
    }

    createCheckbox() {
        return this.checkbox.clone();
    }
}

class MacFactory implements GUIFactory {

    button = new MacButton();
    checkbox = new MacCheckbox();
    createButton() {
        return new MacButton();
    }

    createCheckbox() {
        return new MacCheckbox();
    }
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
