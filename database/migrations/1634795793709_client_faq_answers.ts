import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClientFaqAnswers extends BaseSchema {
  protected tableName = 'client_faq_answers'

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

      table
        .bigInteger('client_faq_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('client_faqs')
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
