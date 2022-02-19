import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import ClientTicket from './ClientTicket'
import ClientTicketAnswerAttachment from './ClientTicketAnswerAttachment'
import Client from './Client'

export default class ClientTicketAnswer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public client_ticket_id: number

  @column()
  public client_id: number

  @column()
  public content: string

  @belongsTo(() => ClientTicket, {
    foreignKey: 'client_ticket_id',
    localKey: 'id',
  })
  public Ticket: BelongsTo<typeof ClientTicket>

  @hasMany(() => ClientTicketAnswerAttachment, {
    foreignKey: 'client_ticket_answer_id',
    localKey: 'id',
  })
  public TicketAttachments: HasMany<typeof ClientTicketAnswerAttachment>

  @belongsTo(() => Client, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public User: BelongsTo<typeof Client>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
