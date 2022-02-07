import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddDescriptionToClientTickets extends BaseSchema {
  protected tableName = 'client_tickets'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('description').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('description')
    })
  }
}
