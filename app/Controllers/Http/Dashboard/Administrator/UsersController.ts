import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'
import CreateAdministratorValidator from 'App/Validators/Administrator/CreateAdministratorValidator'
import UpdateAdministratorValidator from 'App/Validators/Administrator/UpdateAdministratorValidator'

interface AdministratorData {
  name: string
  email: string
  username: string
  password: string
}

export default class UsersController {
  public async delete({ params, session, response }: HttpContextContract) {
    const user = await Users.findOrFail(params.id)

    user.deactivated = true
    await user.save()

    session.flash('success', 'Usuário deletado com sucesso!')

    return response.redirect().toRoute('administrator.home')
  }

  public async create({ request, session, response }: HttpContextContract) {
    await request.validate(CreateAdministratorValidator)
    const data: AdministratorData = request.only(['name', 'username', 'email', 'password'])

    await Users.create(data)

    session.flash('success', 'Usuário criado com sucesso!')

    return response.redirect().toRoute('administrator.home')
  }

  public async updateview({ params, view }: HttpContextContract) {
    const user = await Users.findOrFail(params.id)

    return view.render('pages/administrator/auth/update/user', { user: user })
  }

  public async update({ params, request, session, response }: HttpContextContract) {
    await request.validate(UpdateAdministratorValidator)
    const data: AdministratorData = request.only(['name', 'username', 'email', 'password'])

    const user = await Users.findOrFail(params.id)

    user.name = data.name
    user.username = data.username
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
