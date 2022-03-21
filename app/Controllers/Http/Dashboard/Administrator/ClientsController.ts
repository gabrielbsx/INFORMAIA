import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client/General/Client'
import CreateClientValidator from 'App/Validators/Administrator/CreateClientValidator'

interface ClientData {
    name: string
    email: string
    username: string
    password: string
    user_id?: number
}

export default class ClientsController {
    public async createview({ view }: HttpContextContract) {
        return view.render('pages/administrator/auth/create/client')
    }

    public async delete({ params, session, response }: HttpContextContract) {
        const client = await Client.findOrFail(params.id)

        client.deactivated = true
        await client.save()

        session.flash('success', 'Cliente deletado com sucesso!')

        return response.redirect().toRoute('administrator.home')
    }

    public async updateview({ params, view }: HttpContextContract) {
        const client = await Client.findOrFail(params.id)

        return view.render('pages/administrator/auth/update/client', { client })
    }

    public async create({ request, auth, session, response }: HttpContextContract) {
        await request.validate(CreateClientValidator)
        const data: ClientData = request.only(['name', 'username', 'email', 'password'])

        data.user_id = auth.use('administrator').user!.id

        await Client.create(data)

        session.flash('success', 'Cliente criado com sucesso!')
        return response.redirect().toRoute('administrator.home')
    }

    public async update({ params, request, session, response }: HttpContextContract) {
        const data = request.only(['username', 'name', 'email', 'password'])

        const client = await Client.findOrFail(params.id)

        client.name = data.name
        client.email = data.email
        client.password = data.password

        await client.save()

        session.flash('success', 'Cliente atualizado com sucesso!')

        return response.redirect().toRoute('administrator.home')
    }
}
