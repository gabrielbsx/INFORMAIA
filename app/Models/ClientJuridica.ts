import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'
import Cnae from './Cnae'

export default class ClientJuridica extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public client_id: number

  @column()
  public cnpj: string

  @column()
  public razao_social: string

  @column()
  public nome_fantasia: string

  @column()
  public tipo: string

  @column()
  public data_abertura: DateTime

  @column()
  public data_situacao_cadastral: DateTime

  @column()
  public situacao_cadastral: boolean

  @column()
  public capital_social: number

  @column()
  public natureza_juridica: string

  @column()
  public mei: boolean

  @column()
  public logradouro: string

  @column()
  public numero: string

  @column()
  public complemento: string

  @column()
  public bairro: string

  @column()
  public municipio: string

  @column()
  public uf: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public cnae: string

  @column()
  public data_consulta: DateTime

  @belongsTo(() => Client, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public Client: BelongsTo<typeof Client>

  @belongsTo(() => Cnae, {
    foreignKey: 'cnae',
    localKey: 'cnae',
  })
  public Cnae: BelongsTo<typeof Cnae>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}