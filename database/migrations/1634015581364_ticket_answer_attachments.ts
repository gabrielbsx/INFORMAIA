import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TicketAnswerAttachments extends BaseSchema {
  protected tableName = 'ticket_answer_attachments'

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
        .bigInteger('ticket_answer_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ticket_answers')
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
