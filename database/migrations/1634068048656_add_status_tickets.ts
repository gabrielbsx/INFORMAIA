import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddStatusTickets extends BaseSchema {
  protected tableName = 'tickets'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('status', 1).notNullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('status')
    })
  }
}
