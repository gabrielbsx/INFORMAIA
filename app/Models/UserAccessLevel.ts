import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Users from './Users'

export default class UserAccessLevel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public user_admin: boolean

  @column()
  public user_seller: boolean

  @column()
  public add_users: boolean

  @column()
  public update_users: boolean

  @column()
  public remove_users: boolean

  @column()
  public add_tickets: boolean

  @column()
  public update_tickets: boolean

  @column()
  public remove_tickets: boolean

  @column()
  public add_user_admin: boolean

  @column()
  public update_user_admin: boolean

  @column()
  public remove_user_admin: boolean

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

  @belongsTo(() => Users, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public User: BelongsTo<typeof Users>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
