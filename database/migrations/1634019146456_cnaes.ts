import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cnaes extends BaseSchema {
  protected tableName = 'cnaes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.string('cnae').unique()
      table.string('description').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
