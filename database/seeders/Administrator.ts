import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Users from 'App/Models/Administrator/General/Users'

export default class AdministratorSeeder extends BaseSeeder {
  public async run() {
    await Users.create({
      name: 'Administrator',
      username: 'admininistrator',
      email: 'administrator@kentaro.com.br',
      password: '@K3nt3r0',
      status: 0,
    })
  }
}
