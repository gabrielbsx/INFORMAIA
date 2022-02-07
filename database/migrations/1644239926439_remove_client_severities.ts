import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RemoveClientSeverities extends BaseSchema {
  protected tableName = 'client_ticket_severities'

  public async up() {
    this.schema.dropTable(this.tableName)
  }

  public async down() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('name').notNullable().unique()
      table.string('slug').notNullable().unique()
      table.text('description').nullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true })
    })
  }
}
