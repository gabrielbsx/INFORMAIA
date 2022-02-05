import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Faqs extends BaseSchema {
  protected tableName = 'faqs'

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
        .bigInteger('category')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('faq_categories')
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
