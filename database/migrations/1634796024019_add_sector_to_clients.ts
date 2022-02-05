import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddSectorToClients extends BaseSchema {
  protected tableName = 'clients'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.bigInteger('sector_id').nullable().unsigned().references('id').inTable('client_sectors')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('sector_id')
      table.dropColumn('sector_id')
    })
  }
}
