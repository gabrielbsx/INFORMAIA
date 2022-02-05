import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ response, auth }: HttpContextContract, next: () => Promise<void>) {
    if (auth.use('web').isLoggedIn) {
      return await next()
    }
    return response.redirect().toRoute('administrator.guest.login')
  }
}
