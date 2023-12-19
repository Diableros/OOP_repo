interface Button {
  render: () => void;
}

interface Checkbox {
  render: () => void;
}

class WinButton implements Button {
  render() {
    console.log('win button is rendered');
  }
}
class MacButton implements Button {
  render() {
    console.log('mac button is rendered');
  }
}

class WinCheckbox implements Checkbox {
  render() {
    console.log('win checkbox is rendered');
  }
}
class MacCheckbox implements Checkbox {
  render() {
    console.log('mac checkbox is rendered');
  }
}

interface GUIFactory {
  createButton: () => Button;
  createCheckbox: () => Checkbox;
}

class WinFactory implements GUIFactory {
  createButton() {
    return new WinButton();
  }

  createCheckbox() {
    return new WinCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton() {
    return new MacButton();
  }

  createCheckbox() {
    return new MacCheckbox();
  }
}

class GUIFacade {
  createFactory(factory: 'Mac' | 'Win'): GUIFactory {
    // Здесь может быть логика определения платформы или другие условия
    if (factory === 'Win') {
      return new WinFactory();
    } else if (factory === 'Mac') {
      return new MacFactory();
    }

    throw new Error('Invalid factory');
  }
}

class Application {
  private factory: GUIFactory;
  private button: Button;

  constructor(factory: 'Mac' | 'Win') {
    this.factory = new GUIFacade().createFactory(factory);
    this.button = this.factory.createButton();
  }

  render() {
    this.button.render();
  }
}

new Application('Mac').render();
