import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserAccessLevels extends BaseSchema {
  protected tableName = 'user_access_levels'

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

      table.boolean('user_admin').defaultTo(false)
      table.boolean('user_seller').defaultTo(false)

      table.boolean('add_users').defaultTo(false)
      table.boolean('update_users').defaultTo(false)
      table.boolean('remove_users').defaultTo(false)

      table.boolean('add_tickets').defaultTo(false)
      table.boolean('update_tickets').defaultTo(false)
      table.boolean('remove_tickets').defaultTo(false)

      table.boolean('add_user_admin').defaultTo(false)
      table.boolean('update_user_admin').defaultTo(false)
      table.boolean('remove_user_admin').defaultTo(false)

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
