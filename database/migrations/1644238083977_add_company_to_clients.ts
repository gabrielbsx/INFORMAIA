import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddCompanyToClients extends BaseSchema {
  protected tableName = 'clients'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .bigInteger('company_id')
        .unsigned()
        .references('id')
        .inTable('companies')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('company_id')
    })
  }
}
