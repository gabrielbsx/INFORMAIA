import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Guest {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    if (!(await auth.use('client').check())) {
      return await next()
    }
    return await response.redirect().toRoute('client.guest.login')
  }
}
