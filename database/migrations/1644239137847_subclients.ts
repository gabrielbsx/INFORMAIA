import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Subclients extends BaseSchema {
  protected tableName = 'subclients'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.bigInteger('client-Id').unsigned().notNullable().references('id').inTable('clients')
      table.string('name', 40).notNullable()
      table.string('username').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.integer('status', 1).unsigned().defaultTo(0)
      table.boolean('deactivated').defaultTo(false)
      table.integer('confirmed', 1).unsigned().defaultTo(0)
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
