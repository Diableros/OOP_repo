interface Command {
  execute(handler: Handler): void;
}

class ConcreteCommand implements Command {
  execute(handler: Handler): void {
    handler.handleCommand(this);
  }
}

abstract class Handler {
  private nextHandler: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handleCommand(command: Command): void {
    if (!this.canHandle(command)) {
      if (this.nextHandler) {
        this.nextHandler.handleCommand(command);
      }
      return;
    }

    this.doHandle(command);
  }

  protected abstract canHandle(command: Command): boolean;
  protected abstract doHandle(command: Command): void;
}

class ConcreteHandlerA extends Handler {
  protected canHandle(command: Command): boolean {
    // ... логика проверки может ли этот обработчик выполнить команду
    return true; // или false в зависимости от условий
  }

  protected doHandle(command: Command): void {
    // ... выполнение операции над контекстом для команды
    console.log('Обработчик A обрабатывает команду', command);
  }
}

class ConcreteHandlerB extends Handler {
  protected canHandle(command: Command): boolean {
    // ... логика проверки
    return false; // или true
  }

  protected doHandle(command: Command): void {
    // ... выполнение операции
    console.log('Обработчик B обрабатывает команду', command);
  }
}

const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();

handlerA.setNext(handlerB);

const command = new ConcreteCommand();
command.execute(handlerA);
