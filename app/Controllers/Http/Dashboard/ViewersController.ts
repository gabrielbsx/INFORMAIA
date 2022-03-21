import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClientLicense from 'App/Models/Client/General/ClientLicense'
import Ticket from 'App/Models/Administrator/Ticket/Ticket'
import Users from 'App/Models/Administrator/General/Users'
import { v4 } from 'uuid'

export default class ViewersController {
  public async home({ view, request }: HttpContextContract) {
    const users = await Users.query().orderBy('id', 'desc').paginate(request.input('users', 1), 5)

    const tickets = await Ticket.query()
      .orderBy('id', 'desc')
      .paginate(request.input('tickets', 1), 5)

    return view.render('pages/dashboard/auth/home', { users, tickets })
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
