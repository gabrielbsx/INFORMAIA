import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Clientauth {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    if (!auth.use('client').isLoggedIn) {
      return await response.redirect().toRoute('client.guest.login')
    }
    if (auth.use('client').user!.deactivated) {
      return await response.redirect().toRoute('client.guest.login')
    }
    return await next()
  }
}
