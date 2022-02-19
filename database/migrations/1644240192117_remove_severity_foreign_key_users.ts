import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RemoveSeverityForeignKeyUsers extends BaseSchema {
  protected tableName = 'tickets'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('severity')
      table.integer('severity', 1).unsigned().defaultTo(0).alter()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .bigInteger('severity')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ticket_severities')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }
}
