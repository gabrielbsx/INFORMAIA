import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignUpValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.required()]),
    username: schema.string({ trim: true }, [
      rules.minLength(4),
      rules.maxLength(16),
      rules.unique({ table: 'clients', column: 'username' }),
    ]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'clients', column: 'email' }),
    ]),
    password: schema.string({ trim: true }, [
      rules.minLength(8),
      rules.maxLength(16),
      rules.confirmed('passwordConfirmation'),
    ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {
    'name.required': ' nome é obrigatório',
    'username.required': ' nome de usuário é obrigatório',
    'username.minLength': ' nome de usuário deve ter no mínimo 4 caracteres',
    'username.maxLength': ' nome de usuário deve ter no máximo 16 caracteres',
    'username.unique': ' nome de usuário já cadastrado',
    'email.required': ' email é obrigatório',
    'email.email': ' email inválido',
    'email.unique': ' email já cadastrado',
    'password.required': ' senha é obrigatório',
    'password.minLength': ' senha deve ter no mínimo 8 caracteres',
    'password.maxLength': ' senha deve ter no máximo 16 caracteres',
    'password.confirmed': ' senhas não conferem',
  }
}
