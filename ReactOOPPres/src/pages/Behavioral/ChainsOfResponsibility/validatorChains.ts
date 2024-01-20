import {
  NotEmptyValidator,
  EmailFormatValidator,
  LengthValidator,
  PasswordStrengthValidator
} from './validators'

export const emailValidatorChain = new NotEmptyValidator()
emailValidatorChain.setNext(new EmailFormatValidator())

export const usernameValidatorChain = new NotEmptyValidator()
usernameValidatorChain.setNext(new LengthValidator(3, 12))

export const passwordValidatorChain = new NotEmptyValidator()
passwordValidatorChain
  .setNext(new LengthValidator(8, 20))
  .setNext(new PasswordStrengthValidator())
