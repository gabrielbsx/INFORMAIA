import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SubclientTickets extends BaseSchema {
  protected tableName = 'subclient_tickets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table
        .bigInteger('subclient_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('subclients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.integer('severity', 1).unsigned().defaultTo(0)
      table.integer('status', 1).unsigned().defaultTo(0)

      table.string('title').notNullable()
      table.string('slug').notNullable().unique()
      table.text('content').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
