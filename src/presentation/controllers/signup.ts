import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missingParamsError'
import { badRequest, internalServerError } from '../helpers/httpHelper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/emailValidator'
import { InvalidParamError } from '../errors/invalidParamError'
import { ServerError } from '../errors/serverError'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const isValid = this.emailValidator.isValid(httpRequest.body.email)

      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
    } catch {
      return internalServerError(new ServerError())
    }
  }
}
