import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TicketAnswers extends BaseSchema {
  protected tableName = 'ticket_answers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

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
      table.text('content').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
