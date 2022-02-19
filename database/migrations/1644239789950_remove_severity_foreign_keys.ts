import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RemoveSeverityForeignKeys extends BaseSchema {
  protected tableName = 'client_tickets'

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
        .inTable('severities')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }
}
