import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TicketAttachments extends BaseSchema {
  protected tableName = 'ticket_attachments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.string('name').notNullable().unique()
      table
        .bigInteger('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .bigInteger('ticket_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('tickets')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('slug').notNullable().unique()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
