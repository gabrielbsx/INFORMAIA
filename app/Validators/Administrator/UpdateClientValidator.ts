import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateClientValidator {
	constructor(protected ctx: HttpContextContract) {
	}

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
		name: schema.string({ trim: true }, [
			rules.minLength(3),
			rules.maxLength(100),
		]),
		username: schema.string({ trim: true }, [
			rules.minLength(8),
			rules.maxLength(16),
			rules.unique({ table: 'clients', column: 'username' }),
		]),
		email: schema.string({ trim: true }, [
			rules.email({
				sanitize: true,
			}),
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
		'name.required': ' nome obrigatório',
		'name.minLength': ' nome deve ter no mínimo 3 caracteres',
		'name.maxLength': ' nome deve ter no máximo 100 caracteres',
		'username.required': ' nome de usuário obrigatório',
		'username.minLength': ' nome de usuário deve ter no mínimo 8 caracteres',
		'username.maxLength': ' nome de usuário deve ter no máximo 16 caracteres',
		'username.unique': ' nome de usuário já existe',
		'email.required': ' email obrigatório',
		'email.email': ' email inválido',
		'email.unique': ' email já existe',
		'password.required': ' senha obrigatória',
		'password.minLength': ' senha deve ter no mínimo 8 caracteres',
		'password.maxLength': ' senha deve ter no máximo 16 caracteres',
		'password.confirmed': ' senhas não conferem',
	}
}
