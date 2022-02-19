import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RemoveUserJuridicas extends BaseSchema {
  protected tableName = 'user_juridicas'

  public async up() {
    this.schema.dropTable(this.tableName)
  }

  public async down() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')

      table
        .bigInteger('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('cnpj').unique().notNullable()
      table.string('razao_social').notNullable()
      table.string('nome_fantasia').notNullable()
      table.string('tipo').notNullable()
      table.dateTime('data_abertura').notNullable()
      table.dateTime('data_situacao_cadastral').notNullable()
      table.boolean('situacao_cadastral').notNullable()
      table.double('capital_social').notNullable()
      table.string('natureza_juridica').notNullable()
      table.boolean('mei').notNullable()
      table.string('logradouro').notNullable()
      table.string('numero').notNullable()
      table.string('complemento').notNullable()
      table.string('bairro').notNullable()
      table.string('municipio').notNullable()
      table.string('uf').notNullable()
      table.string('telefone').notNullable()
      table.string('email').notNullable()

      table
        .string('cnae')
        .notNullable()
        .references('cnae')
        .inTable('cnaes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.dateTime('data_consulta').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }
}
