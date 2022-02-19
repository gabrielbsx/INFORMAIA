import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SubclientProfiles extends BaseSchema {
  protected tableName = 'subclient_profiles'

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

      table.string('nick').notNullable()
      table.string('age').notNullable()
      table.string('email').notNullable()
      table.string('phone').notNullable()
      table.string('avatar').nullable().defaultTo('avatar.png')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
