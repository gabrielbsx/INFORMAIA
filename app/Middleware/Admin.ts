import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle({ response, auth }: HttpContextContract, next: () => Promise<void>) {
    if (!auth.use('administrator').isLoggedIn) {
      return response.redirect().toRoute('administrator.guest.login')
    }
    if (auth.use('administrator').user!.deactivated) {
      return response.redirect().toRoute('administrator.guest.login')
    }
    return await next()
  }
}
