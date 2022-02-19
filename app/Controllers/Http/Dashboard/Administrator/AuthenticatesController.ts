import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SigninValidator from 'App/Validators/Guest/SigninValidator'

export default class AuthenticatesController {
  public async signin({ request, auth, response, session }: HttpContextContract) {
    await request.validate(SigninValidator)
    const data = request.only(['email', 'password'])

    await auth.use('administrator').attempt(data.email, data.password)

    if (auth.use('administrator').user!.deactivated) {
      session.flash('error', 'Sua conta foi desativada!')
      await auth.use('administrator').logout()
      return response.redirect().toRoute('administrator.guest.login')
    }

    auth.use('administrator').user!.status = 1
    auth.use('administrator').user!.save()

    return response.redirect().toRoute('administrator.home')
  }

  public async signout({ response, auth }: HttpContextContract) {
    auth.use('administrator').user!.status = 0
    auth.use('administrator').user!.save()

    await auth.use('administrator').logout()

    return response.redirect().toRoute('administrator.guest.login')
  }
}
