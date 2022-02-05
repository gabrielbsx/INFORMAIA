import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import ClientTicket from './ClientTicket'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'

export default class ClientTicketCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  @slugify({
    strategy: 'dbIncrement',
    fields: ['name'],
  })
  public slug: string

  @hasMany(() => ClientTicket, {
    foreignKey: 'category',
    localKey: 'id',
  })
  public Tickets: HasMany<typeof ClientTicket>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
