import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClientProfiles extends BaseSchema {
  protected tableName = 'client_profiles'

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

      table.string('nick').notNullable()
      table.string('age').notNullable()
      table.string('email').notNullable()
      table.string('phone').notNullable()
      table.string('avatar').nullable().defaultTo('avatar.png')

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
