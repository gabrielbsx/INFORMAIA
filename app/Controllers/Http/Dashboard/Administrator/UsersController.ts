import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class UsersController {
    public async delete({ params, session, response }: HttpContextContract) {
        const user = await Users.findOrFail(params.id)

        await user.delete()

        session.flash('success', 'Usuário deletado com sucesso!')

        return response.redirect().toRoute('administrator.home')
    }

    public async create({ request, session, response }: HttpContextContract) {
        const data = request.only(['name', 'email', 'password', 'password_confirmation'])

        if (data.password !== data.password_confirmation) {
            session.flash('error', 'Senhas não conferem!')
            return response.redirect().toRoute('administrator.home')
        }

        await Users.create(data)

        session.flash('success', 'Usuário criado com sucesso!')

        return response.redirect().toRoute('administrator.home')
    }

    public async updateview({ params, view }: HttpContextContract) {    
        const user = await Users.findOrFail(params.id)

        return view.render('pages/administrator/auth/update/user', { user: user })
    }

    public async update({ params, request, session, response }: HttpContextContract) {
        const data = request.only(['name', 'email', 'password', 'password_confirmation'])

        const user = await Users.findOrFail(params.id)

        user.name = data.name
        user.email = data.email
        user.password = data.password

        await user.save()

        session.flash('success', 'Usuário atualizado com sucesso!')

        return response.redirect().toRoute('administrator.home')
    }

    public async createview({ view }: HttpContextContract) {
        return view.render('pages/administrator/auth/create/user')
    }
}
