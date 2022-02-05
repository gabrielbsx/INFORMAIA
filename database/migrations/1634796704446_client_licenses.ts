import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClientLicenses extends BaseSchema {
  protected tableName = 'client_licenses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table.string('license').notNullable().unique()
      table.double('price').notNullable()

      table
        .bigInteger('client_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('clients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .bigInteger('seller_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamp('expires_at', { useTz: true })

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
