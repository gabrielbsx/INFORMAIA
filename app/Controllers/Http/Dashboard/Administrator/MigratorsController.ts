import Application from '@ioc:Adonis/Core/Application'
import Database from '@ioc:Adonis/Lucid/Database'
import Migrator from '@ioc:Adonis/Lucid/Migrator'

export default class MigratorsController {
  public async index(): Promise<typeof migrator.migratedFiles> {
    const migrator = new Migrator(Database, Application, {
      direction: 'up',
      dryRun: false,
    })

    await migrator.run()

    return migrator.migratedFiles
  }
}
