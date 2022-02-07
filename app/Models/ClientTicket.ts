import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'
import Client from './Client'
import ClientTicketSeverity from './ClientTicketSeverity'
import ClientTicketCategory from './ClientTicketCategory'
import ClientTicketAttachment from './ClientTicketAttachment'

export default class ClientTicket extends BaseModel {
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
  public client_id: number

  @column()
  public content: string

  @hasMany(() => ClientTicketAttachment, {
    foreignKey: 'client_ticket_id',
    localKey: 'id',
  })
  public TicketAttachments: HasMany<typeof ClientTicketAttachment>

  @belongsTo(() => ClientTicketCategory, {
    foreignKey: 'category',
    localKey: 'id',
  })
  public TicketCategory: BelongsTo<typeof ClientTicketCategory>

  @belongsTo(() => ClientTicketSeverity, {
    foreignKey: 'severity',
    localKey: 'id',
  })
  public TicketSeverity: BelongsTo<typeof ClientTicketSeverity>

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
