import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
import Client from './Client'
import FaqCategory from './FaqCategory'

export default class ClientFaq extends BaseModel {
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
  public client_id: number

  @column()
  public category: number

  @column()
  public content: string

  @belongsTo(() => Client, {
    localKey: 'id',
    foreignKey: 'client_id',
  })
  public User: BelongsTo<typeof Client>

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
