interface Button {
    render(): void;
    onClick(func: () => void): void;
}

class ChromeButton implements Button {
    render() {
        console.log('Chrome button render');
    }

    onClick(func: () => void) {
        console.log('click on Chrome button');
    }
}

class SafariButton implements Button {
    render() {
        console.log('safari button render');
    }

    onClick(func: () => void) {
        console.log('click on safari button');
    }
}

abstract class Dialog {
    button: Button;

    render() {
        this.button = this.createButton();
        this.button.render();
    }

    abstract createButton(): Button;
}


class ChromeDialog extends Dialog {
    createButton() {
        return new ChromeButton();
    }
}

class SafariDialog extends Dialog {
    createButton() {
        return new SafariButton();
    }
}

new ChromeDialog().render()

