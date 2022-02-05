import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClientFaqCategories extends BaseSchema {
  protected tableName = 'client_faq_categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.string('name').unique()

      table
        .bigInteger('client_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('slug').notNullable().unique()
      table.text('description').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
