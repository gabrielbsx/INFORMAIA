import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Client from './Client'

export default class ClientAccessLevel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public client_id: number

  @column()
  public client_admin: boolean

  @column()
  public add_clients: boolean

  @column()
  public update_clients: boolean

  @column()
  public remove_clients: boolean

  @column()
  public add_tickets: boolean

  @column()
  public update_tickets: boolean

  @column()
  public remove_tickets: boolean

  @column()
  public add_client_admin: boolean

  @column()
  public update_client_admin: boolean

  @column()
  public remove_client_admin: boolean

  @column()
  public add_companies: boolean

  @column()
  public update_companies: boolean

  @column()
  public remove_companies: boolean

  @column()
  public add_faqs: boolean

  @column()
  public update_faqs: boolean

  @column()
  public remove_faqs: boolean

  @column()
  public can_read_all_tickets: boolean

  @belongsTo(() => Client, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public Client: BelongsTo<typeof Client>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
