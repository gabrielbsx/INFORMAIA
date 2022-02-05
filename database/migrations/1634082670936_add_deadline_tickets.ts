import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddDeadlineTickets extends BaseSchema {
  protected tableName = 'tickets'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.timestamp('deadline', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('deadline')
    })
  }
}
