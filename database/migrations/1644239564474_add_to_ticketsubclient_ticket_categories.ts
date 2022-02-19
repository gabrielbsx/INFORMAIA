import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddToTicketsubclientTicketCategories extends BaseSchema {
  protected tableName = 'subclient_tickets'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .bigInteger('category')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('subclient_ticket_categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('category')
      table.dropColumn('category')
    })
  }
}
