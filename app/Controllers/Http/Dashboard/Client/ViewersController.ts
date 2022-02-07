import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import ClientLicense from 'App/Models/ClientLicense'
import ClientTicket from 'App/Models/ClientTicket'
import Ticket from 'App/Models/Ticket'
import Users from 'App/Models/Users'
import { v4 } from 'uuid'

export default class ViewersController {
  public async home({ view, request, auth }: HttpContextContract) {
    const company_id = auth.use('client').user?.company_id

    const tickets = await ClientTicket.query()
      .orderBy('id', 'desc')
      .whereHas('Client', (builder) => {
        builder.where('company_id', company_id)
      })
      .paginate(request.input('tickets', 1), 5)

    return view.render('pages/dashboard/auth/home', { tickets })
  }

  public async getAllUsers({ response }: HttpContextContract) {
    const users = await Users.query().paginate(1, 5)
    return response.json({ users })
  }

  public async getlicense({ response }: HttpContextContract) {
    return response.json({ license: v4() })
  }

  public async getuserlicense({ params, response }: HttpContextContract) {
    const license = params.license

    const licenseUser = await ClientLicense.query()
      .preload('Client')
      .where('license', license)
      .firstOrFail()

    return response.json({ licenseUser })
  }
}
