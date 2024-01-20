abstract class Command {
  protected app: Application;
  protected editor: Editor;
  protected backup: string;

  constructor(app: Application, editor: Editor) {
    this.app = app;
    this.editor = editor;
  }

  protected saveBackup() {
    this.backup = this.editor.text;
  }

  public undo() {
    this.editor.text = this.backup;
  }

  abstract execute(): boolean;
}

class CopyCommand extends Command {
  execute() {
    this.app.clipboard = this.editor.getSelection();
    return false;
  }
}

class CutCommand extends Command {
  execute() {
    this.saveBackup();
    this.app.clipboard = this.editor.getSelection();
    this.editor.deleteSelection();
    return true;
  }
}

class PasteCommand extends Command {
  execute() {
    this.saveBackup();
    this.editor.replaceSelection(this.app.clipboard);
    return true;
  }
}

class UndoCommand extends Command {
  execute() {
    this.app.undo();
    return false;
  }
}

class CommandHistory {
  private history: Command[] = [];

  push(c: Command) {
    this.history.push(c);
  }

  pop(): Command | null {
    return this.history.pop() || null;
  }
}

class Editor {
  text: string = '';

  getSelection() {
    return this.text;
  }

  deleteSelection() {}

  replaceSelection(text: string) {
    this.text = text;
  }
}

class Application {
  clipboard: string = '';
  editor: Editor;
  history: CommandHistory = new CommandHistory();

  constructor() {
    this.editor = new Editor();
  }

  createUI() {
    const copyButton = {
      setCommand: (command: () => void) => {
        /* ... */
      },
    };
    const cutButton = {
      setCommand: (command: () => void) => {
        /* ... */
      },
    };
    const pasteButton = {
      setCommand: (command: () => void) => {
        /* ... */
      },
    };
    const undoButton = {
      setCommand: (command: () => void) => {
        /* ... */
      },
    };

    const shortcuts = {
      onKeyPress: (key: string, handler: () => void) => {
        /* ... */
      },
    };

    const copy = () => {
      this.executeCommand(new CopyCommand(this, this.editor));
    };
    copyButton.setCommand(copy);
    shortcuts.onKeyPress('Ctrl+C', copy);

    const cut = () => {
      this.executeCommand(new CutCommand(this, this.editor));
    };
    cutButton.setCommand(cut);
    shortcuts.onKeyPress('Ctrl+X', cut);

    const paste = () => {
      this.executeCommand(new PasteCommand(this, this.editor));
    };
    pasteButton.setCommand(paste);
    shortcuts.onKeyPress('Ctrl+V', paste);

    const undo = () => {
      this.executeCommand(new UndoCommand(this, this.editor));
    };
    undoButton.setCommand(undo);
    shortcuts.onKeyPress('Ctrl+Z', undo);
  }

  executeCommand(command: Command) {
    if (command.execute()) {
      this.history.push(command);
    }
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

const app = new Application();

app.createUI();
