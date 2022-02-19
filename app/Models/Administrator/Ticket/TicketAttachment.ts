import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Ticket from './Ticket'
import Users from './Users'

export default class TicketAttachment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public ticket_id: number

  @column()
  public user_id: number

  @belongsTo(() => Ticket, {
    foreignKey: 'ticket_id',
    localKey: 'id',
  })
  public Ticket: BelongsTo<typeof Ticket>

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
