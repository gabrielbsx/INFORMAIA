import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RemoveSeverityUsers extends BaseSchema {
  protected tableName = 'ticket_severities'

  public async up() {
    this.schema.dropTable(this.tableName)
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.string('name').notNullable().unique()
      table.string('slug').notNullable().unique()

      table.text('description').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }
}
