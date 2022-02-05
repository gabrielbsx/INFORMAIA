import Users from 'App/Models/Users'
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Faq from './Faq'

export default class FaqAnswer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public content: string

  @column()
  public user_id: number

  @column()
  public faq_id: number

  @belongsTo(() => Users, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public User: BelongsTo<typeof Users>

  @belongsTo(() => Faq, {
    foreignKey: 'faq_id',
    localKey: 'id',
  })
  public Faq: BelongsTo<typeof Faq>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
