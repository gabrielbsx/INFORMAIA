import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClientAccessLevels extends BaseSchema {
  protected tableName = 'client_access_levels'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table
        .bigInteger('client_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.boolean('client_admin').defaultTo(false)

      table.boolean('add_clients').defaultTo(false)
      table.boolean('update_clients').defaultTo(false)
      table.boolean('remove_clients').defaultTo(false)

      table.boolean('add_tickets').defaultTo(false)
      table.boolean('update_tickets').defaultTo(false)
      table.boolean('remove_tickets').defaultTo(false)

      table.boolean('add_client_admin').defaultTo(false)
      table.boolean('update_client_admin').defaultTo(false)
      table.boolean('remove_client_admin').defaultTo(false)

      table.boolean('add_companies').defaultTo(false)
      table.boolean('update_companies').defaultTo(false)
      table.boolean('remove_companies').defaultTo(false)

      table.boolean('add_faqs').defaultTo(false)
      table.boolean('update_faqs').defaultTo(false)
      table.boolean('remove_faqs').defaultTo(false)

      table.boolean('can_read_all_tickets').defaultTo(false)

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
