interface ComponentWithContextualHelp {
  showHelp(): void;
}

abstract class Component implements ComponentWithContextualHelp {
  public tooltipText: string;
  public container: Container;

  showHelp(): void {
    if (this.tooltipText != null) {
      // Показать подсказку.
    } else if (this.container) {
      this.container.showHelp();
    }
  }
}

abstract class Container extends Component {
  protected children: Component[] = [];

  add(child: Component): void {
    this.children.push(child);
    child.container = this;
  }
}

class Button extends Component {
  // ...
}

class Panel extends Container {
  public modalHelpText: string;

  showHelp(): void {
    if (this.modalHelpText != null) {
      // Показать модальное окно с помощью.
    } else {
      super.showHelp();
    }
  }
  // ...
}

class Dialog extends Container {
  public wikiPageURL: string;

  showHelp(): void {
    if (this.wikiPageURL != null) {
      // Открыть страницу Wiki в браузере.
    } else {
      super.showHelp();
    }
  }
}

class Application {
  private dialog: Dialog;

  // Каждое приложение конфигурирует цепочку по-своему.
  createUI(): void {
    this.dialog = new Dialog();
    this.dialog.wikiPageURL = 'http://...';

    const panel = new Panel();
    panel.modalHelpText = 'This panel does...';

    const ok = new Button();
    ok.tooltipText = 'This is an OK button that...';

    const cancel = new Button();

    panel.add(ok);
    panel.add(cancel);
    this.dialog.add(panel);
  }

  onF1KeyPress(): void {
    const component = this.getComponentAtMouseCoords();
    component.showHelp();
  }

  getComponentAtMouseCoords(): Component {
    // вычисление на основе координат мыши
    return this.dialog;
  }
}

const application = new Application();

application.createUI();

application.onF1KeyPress();
