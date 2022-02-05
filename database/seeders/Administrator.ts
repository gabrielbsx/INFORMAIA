import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Users from 'App/Models/Users'

export default class AdministratorSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Users.create({
      name: 'Administrator',
      email: 'administrator@kentaro.com.br',
      password: '@K3nt3r0',
      status: 0,
    })
  }
}
