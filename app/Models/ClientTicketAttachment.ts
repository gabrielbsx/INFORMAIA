import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ClientTicketAnswer from './ClientTicketAnswer'
import Client from './Client'
import ClientTicket from './ClientTicket'

export default class ClientTicketAttachment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public client_ticket_id: number

  @column()
  public client_id: number

  @belongsTo(() => ClientTicket, {
    foreignKey: 'ticket_id',
    localKey: 'id',
  })
  public Ticket: BelongsTo<typeof ClientTicket>

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
