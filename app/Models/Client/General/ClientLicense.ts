import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'
import Users from './Users'

export default class ClientLicense extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public license: string

  @column()
  public price: number

  @column()
  public client_id: number

  @column()
  public seller_id: number

  @belongsTo(() => Client, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public Client: BelongsTo<typeof Client>

  @belongsTo(() => Users, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public User: BelongsTo<typeof Users>

  @column()
  public expires_at: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
