import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Ticket from './Ticket'
import Users from './Users'
import TicketAnswerAttachment from './TicketAnswerAttachment'

export default class TicketAnswer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ticket_id: number

  @column()
  public user_id: number

  @column()
  public content: string

  @belongsTo(() => Ticket, {
    foreignKey: 'ticket_id',
    localKey: 'id',
  })
  public Ticket: BelongsTo<typeof Ticket>

  @hasMany(() => TicketAnswerAttachment, {
    foreignKey: 'ticket_answer_id',
    localKey: 'id',
  })
  public TicketAttachments: HasMany<typeof TicketAnswerAttachment>

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
