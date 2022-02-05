import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Guest {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    if (!auth.use('client').isLoggedIn) {
      return await next()
    }
    return await response.redirect().toRoute('client.guest.login')
  }
}
