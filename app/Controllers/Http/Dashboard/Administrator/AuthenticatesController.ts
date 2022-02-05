import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SigninValidator from 'App/Validators/Guest/SigninValidator'

export default class AuthenticatesController {
  public async signin({ request, auth, response }: HttpContextContract) {
    await request.validate(SigninValidator)
    const data = request.only(['email', 'password'])

    await auth.use('web').attempt(data.email, data.password)

    auth.use('web').user!.status = 1
    auth.use('web').user!.save()

    return response.redirect().toRoute('administrator.home')
  }

  public async signout({ response, auth }: HttpContextContract) {
    auth.use('web').user!.status = 0
    auth.use('web').user!.save()

    await auth.use('web').logout()

    return response.redirect().toRoute('administrator.guest.login')
  }
}
