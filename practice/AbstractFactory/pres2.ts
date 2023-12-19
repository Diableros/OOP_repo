interface Button {
    render: () => void
}

interface Checkbox {
    render: () => void
}

class WinButton implements Button {
    render() {
        console.log('win button is rendered')
    }
}
class MacButton implements Button {
    render() {
        console.log('mac button is rendered')
    }
}

class WinCheckbox implements Checkbox {
    render() {
        console.log('win checkbox is rendered')
    }
}
class MacCheckbox implements Checkbox {
    render() {
        console.log('mac checkbox is rendered')
    }
}

interface GUIFactory {
    createButton: () => Button
    createCheckbox: () => Checkbox
}

class WinFactory implements GUIFactory {
    createButton() {
        return new WinButton()
    }

    createCheckbox() {
        return new WinCheckbox()
    }
}

class MacFactory implements GUIFactory {
    createButton() {
        return new MacButton()
    }

    createCheckbox() {
        return new MacCheckbox()
    }
}

class Application {
    private factory: GUIFactory
    private button: Button

    constructor(factory: 'Mac' | 'Win'){
        if(factory === 'Win'){
            this.factory = new WinFactory()
        }else if(factory === 'Mac'){
            this.factory = new MacFactory()
        }else{
            throw new Error("Invalid factory")
        }
        this.button = this.factory.createButton()
    }

    render(){
        this.button.render()
    }
}

new Application('Mac').render()
