import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FaqAnswers extends BaseSchema {
  protected tableName = 'faq_answers'

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
        .bigInteger('faq_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('faqs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.text('content').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
