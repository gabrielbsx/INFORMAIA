import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'
import CreateClientValidator from 'App/Validators/Administrator/CreateClientValidator'

export default class ClientsController {
    public async createview({ view }: HttpContextContract) {
        return view.render('pages/administrator/auth/create/client')
    }

    public async delete({ params, session, response }: HttpContextContract) {
        const client = await Client.findOrFail(params.id)

        await client.delete()

        session.flash('success', 'Cliente deletado com sucesso!')

        return response.redirect().toRoute('administrator.home')
    }

    public async updateview({ params, view }: HttpContextContract) {
        const client = await Client.findOrFail(params.id)

        return view.render('pages/administrator/auth/update/client', { client })
    }

    public async create({ request, session, response }: HttpContextContract) {
        await request.validate(CreateClientValidator)
        const data = request.only(['name', 'email', 'password', 'password_confirmation'])

        await Client.create(data)

        session.flash('success', 'Cliente criado com sucesso!')
        return response.redirect().toRoute('administrator.home')
    }

    public async update({ params, request, session, response }: HttpContextContract) {
        const data = request.only(['name', 'email', 'password', 'password_confirmation'])

        const client = await Client.findOrFail(params.id)

        client.name = data.name
        client.email = data.email
        client.password = data.password

        await client.save()

        session.flash('success', 'Cliente atualizado com sucesso!')

        return response.redirect().toRoute('administrator.home')
    }
}
