import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserSectors extends BaseSchema {
  protected tableName = 'user_sectors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.string('name').notNullable().unique()
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
