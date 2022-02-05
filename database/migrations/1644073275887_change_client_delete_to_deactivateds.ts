import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChangeClientDeleteToDeactivateds extends BaseSchema {
  protected tableName = 'clients'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('deactivated').defaultTo(false)
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('deactivated')
    })
  }
}
