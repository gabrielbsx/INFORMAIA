import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Migrator from '@ioc:Adonis/Lucid/Migrator'

export default class MigratorsController {
  public async index({ view }: HttpContextContract) {
    const migrator = new Migrator(Database, Application, {
      direction: 'up',
      dryRun: false,
    })

    await migrator.run()

    return migrator.migratedFiles
  }
}
