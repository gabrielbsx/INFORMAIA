import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tickets extends BaseSchema {
  protected tableName = 'tickets'

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
        .bigInteger('severity')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ticket_severities')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .bigInteger('category')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ticket_categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('title').notNullable()
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
