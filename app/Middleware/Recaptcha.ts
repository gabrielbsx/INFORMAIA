import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'

export default class Recaptcha {
  public async handle(
    { request, session, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const dataRequest = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${Env.get(
        'RECAPTCHA_TOKEN'
      )}&response=${request.input('g-recaptcha-response')}&remoteip=${request.header('X-Real-IP')}`
    )

    if (dataRequest.data.success) {
      return await next()
    } else {
      session.flash('error', 'Recaptcha inválido!')
      return response.redirect().toRoute('home')
    }
  }
}
