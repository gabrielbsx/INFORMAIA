import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import TicketAnswer from './TicketAnswer'
import Users from './Users'

export default class TicketAnswerAttachment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public ticket_answer_id: number

  @column()
  public user_id: number

  @belongsTo(() => TicketAnswer, {
    foreignKey: 'ticket_answer_id',
    localKey: 'id',
  })
  public Ticket: BelongsTo<typeof TicketAnswer>

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
