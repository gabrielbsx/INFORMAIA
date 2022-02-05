import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import SignInValidator from 'App/Validators/Client/SignInValidator'
import SignUpValidator from 'App/Validators/Client/SignUpValidator'

export default class AuthenticatesController {
  public async signin({ request, auth, response, session }: HttpContextContract) {
    await request.validate(SignInValidator)
    const data = request.only(['email', 'password'])

    await auth.use('client').attempt(data.email, data.password)

    if (auth.use('client').user!.deactivated) {
      session.flash('error', 'Sua conta foi desativada!')
      await auth.use('client').logout()
      return response.redirect().toRoute('guest.login')
    }

    auth.use('client').user!.status = 1
    auth.use('client').user!.save()

    session.flash('success', 'Bem vindo!')
    return response.redirect().toRoute('auth.home')
  }

  public async signup({ request, response, auth }: HttpContextContract) {
    await request.validate(SignUpValidator)
    const data = request.only(['name', 'username', 'email', 'password', 'passwordConfirmation'])

    const client = new Client()

    client.username = data.username
    client.name = data.name
    client.email = data.email
    client.password = data.password

    await client.save()

    await auth.attempt(client.email, data.password)

    return response.redirect().toRoute('auth.home')
  }

  public async signout({ response, auth }: HttpContextContract) {
    auth.use('client').user!.status = 0
    auth.use('client').user!.save()

    await auth.logout()

    return response.redirect().toRoute('guest.login')
  }
}
