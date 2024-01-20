export interface Validator<T = string> {
  setNext(validator: Validator): Validator
  validate(request: T): T | null
}

abstract class BaseValidator implements Validator {
  private nextValidator: Validator | null = null

  public setNext(validator: Validator): Validator {
    this.nextValidator = validator
    return validator
  }

  public validate(request: string): string | null {
    if (this.nextValidator) {
      return this.nextValidator.validate(request)
    }

    return null
  }
}

export class NotEmptyValidator extends BaseValidator {
  public validate(request: string): string | null {
    if (!request) {
      return 'Поле не может быть пустым.'
    }
    return super.validate(request)
  }
}

export class EmailFormatValidator extends BaseValidator {
  public validate(request: string): string | null {
    const re = /\S+@\S+\.\S+/
    if (!re.test(request)) {
      return 'Это не похоже на email.'
    }
    return super.validate(request)
  }
}

export class LengthValidator extends BaseValidator {
  constructor(
    private min: number,
    private max: number
  ) {
    super()
  }

  public validate(request: string): string | null {
    if (request.length < this.min || request.length > this.max) {
      return `Длина должна быть от ${this.min} до ${this.max} символов.`
    }
    return super.validate(request)
  }
}

export class PasswordStrengthValidator extends BaseValidator {
  public validate(request: string): string | null {
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'
    )
    if (!strongRegex.test(request)) {
      return 'Пароль слишком простой. Должен содержать буквы в разном регистре и цифры.'
    }
    return super.validate(request)
  }
}
