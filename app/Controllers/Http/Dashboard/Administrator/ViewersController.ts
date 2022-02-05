import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import Ticket from 'App/Models/Ticket'
import Users from 'App/Models/Users'

export default class ViewersController {
  public async home({ view, request }: HttpContextContract) {
    const users = await Users.query().orderBy('id', 'desc').paginate(request.input('page_users', 1), 5)
    const clients = await Client.query().orderBy('id', 'desc').paginate(request.input('page_clients', 1), 5)
    const tickets = await Ticket.query().orderBy('id', 'desc').paginate(request.input('page_tickets', 1), 5)

    return view.render('pages/administrator/auth/home', { users, clients, tickets })
  }

  public async tickets({ view, request }: HttpContextContract) {
    const tickets = await Ticket.query().orderBy('id', 'desc').preload('User').paginate(request.input('page_tickets', 1), 5)

    return view.render('pages/administrator/auth/tickets', { tickets })
  }

  public async getAllUsers({ response }: HttpContextContract) {
    const users = await Users.query().paginate(1, 5)
    return response.json({ users })
  }

  public async users({ request, view }: HttpContextContract) {
    const users = await Users.query().orderBy('id', 'desc').paginate(request.input('page_users', 1), 5)

    return view.render('pages/administrator/auth/users', { users })
  }

  public async clients({ request, view }: HttpContextContract) {
    const clients = await Client.query().orderBy('id', 'desc').paginate(request.input('page_clients', 1), 5)

    return view.render('pages/administrator/auth/clients', { clients })
  }
}
