import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TicketCategories extends BaseSchema {
  protected tableName = 'ticket_categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.string('name').notNullable().unique()
      table.string('slug').notNullable().unique()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
