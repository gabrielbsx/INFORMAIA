import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddCategoriesDescriptionToTIcketCategoriesUsers extends BaseSchema {
  protected tableName = 'ticket_categories'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('description').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('description')
    })
  }
}
