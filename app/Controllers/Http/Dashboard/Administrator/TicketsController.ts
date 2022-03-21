import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ticket from 'App/Models/Administrator/Ticket/Ticket'

export default class TicketsController {
    public async createview({ view }: HttpContextContract) {
        return view.render('pages/administrator/auth/create/ticket')
    }

    public async delete({ params, session, response }: HttpContextContract) {
        const ticket = await Ticket.findOrFail(params.id)

        await ticket.delete()

        session.flash('success', 'Ticket deletado com sucesso!')

        return response.redirect().toRoute('administrator.home')
    }

    public async updateview({ params, view }: HttpContextContract) {
        const ticket = await Ticket.findOrFail(params.id)

        return view.render('pages/administrator/auth/update/ticket', { ticket })
    }

    public async create({ request, session, response }: HttpContextContract) {
        const data = request.only(['title', 'category', 'deadline', 'user_id', 'content', 'status', 'severity'])

        await Ticket.create(data)

        session.flash('success', 'Ticket criado com sucesso!')

        return response.redirect().toRoute('administrator.home')
    }
}
