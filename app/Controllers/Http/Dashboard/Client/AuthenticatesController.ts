import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'
import SigninValidator from 'App/Validators/Guest/SigninValidator'
import SignupValidator from 'App/Validators/Guest/SignupValidator'

export default class AuthenticatesController {
  public async signin({ request, auth, response, session }: HttpContextContract) {
    await request.validate(SigninValidator)
    const data = request.only(['email', 'password'])

    await auth.use('client').attempt(data.email, data.password)

    if (auth.use('client').user!.deactivated) {
      session.flash('error', 'Sua conta foi desativada!')
      await auth.use('client').logout()
      return response.redirect().toRoute('guest.login')
    }

    auth.use('client').user!.status = 1
    auth.use('client').user!.save()

    return response.redirect().toRoute('auth.home')
  }

  public async signup({ request, response, auth }: HttpContextContract) {
    await request.validate(SignupValidator)
    const data = request.only(['name', 'username', 'email', 'password', 'passwordConfirmation'])

    const user = new Users()

    user.username = data.username
    user.name = data.name
    user.email = data.email
    user.password = data.password

    await user.save()

    await auth.attempt(user.email, data.password)

    return response.redirect().toRoute('auth.home')
  }

  public async signout({ response, auth }: HttpContextContract) {
    auth.use('client').user!.status = 0
    auth.use('client').user!.save()

    await auth.logout()

    return response.redirect().toRoute('guest.login')
  }
}
