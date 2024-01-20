interface Command {
  execute(request: Request): void;
}

type Request = Partial<Record<string, string>>;

class ConcreteCommandA implements Command {
  execute(request: Request): void {
    // ... выполнение операции над запросом
    console.log('Команда A выполняется над запросом', request);
  }
}

class ConcreteCommandB implements Command {
  execute(request: Request): void {
    // ... выполнение операции над запросом
    console.log('Команда B выполняется над запросом', request);
  }
}

abstract class Handler {
  private nextHandler: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: Request): void {
    this.handleRequest(request);
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }

  protected abstract handleRequest(request: Request): void;
}

class ConcreteHandlerA extends Handler {
  protected handleRequest(request: Request): void {
    const command = new ConcreteCommandA();
    command.execute(request);
  }
}

class ConcreteHandlerB extends Handler {
  protected handleRequest(request: Request): void {
    const command = new ConcreteCommandB();
    command.execute(request);
  }
}

const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();

handlerA.setNext(handlerB);

const request: Request = {
  /* ... данные запроса ... */
};
handlerA.handle(request);
