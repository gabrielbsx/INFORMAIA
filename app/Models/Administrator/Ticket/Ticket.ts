import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Users from './Users'
import TicketSeverity from './TicketSeverity'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
import TicketCategory from './TicketCategory'
import TicketAttachment from './TicketAttachment'

export default class Ticket extends BaseModel {
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
  public category: number

  @column()
  public deadline: boolean

  @column()
  public severity: number

  @column()
  public user_id: number

  @column()
  public content: string

  @column()
  public status?: number

  @hasMany(() => TicketAttachment, {
    foreignKey: 'ticket_id',
    localKey: 'id',
  })
  public TicketAttachments: HasMany<typeof TicketAttachment>

  @belongsTo(() => TicketCategory, {
    foreignKey: 'category',
    localKey: 'id',
  })
  public TicketCategory: BelongsTo<typeof TicketCategory>

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
