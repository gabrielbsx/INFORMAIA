import Users from '../General/Users'
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
import FaqCategory from './FaqCategory'

export default class Faq extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  @slugify({
    strategy: 'dbIncrement',
    fields: ['title'],
  })
  public slug: string

  @column()
  public user_id: number

  @column()
  public category: number

  @column()
  public content: string

  @belongsTo(() => Users, {
    localKey: 'id',
    foreignKey: 'user_id',
  })
  public User: BelongsTo<typeof Users>

  @belongsTo(() => FaqCategory, {
    localKey: 'id',
    foreignKey: 'category',
  })
  public FaqCategory: BelongsTo<typeof FaqCategory>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
