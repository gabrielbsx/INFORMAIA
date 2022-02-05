import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GuestAdmin {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    if (!(await auth.use('administrator').check())) {
      return await next()
    }
    return await response.redirect().toRoute('administrator.home')
  }
}
