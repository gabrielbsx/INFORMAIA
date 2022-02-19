import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  BaseModel,
  beforeSave,
  column,
  hasMany,
  HasMany,
  HasOne,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import ClientTicketAnswer from './ClientTicketAnswer'
import ClientTicketAnswerAttachment from './ClientTicketAnswerAttachment'
import ClientTicketAttachment from './ClientTicketAttachment'
import ClientTicket from './ClientTicket'
import ClientProfile from './ClientProfile'
import ClientAccessLevel from './ClientAccessLevel'
import ClientSector from './ClientSector'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public username: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public access: number

  @column()
  public status: number

  @column()
  public confirmed: number

  @column()
  public user_id: number

  @column()
  public rememberMeToken?: string

  @column()
  public sector_id?: number

  @hasOne(() => ClientSector, {
    foreignKey: 'sector_id',
    localKey: 'id',
  })
  public ClientSector: HasOne<typeof ClientSector>

  @hasOne(() => ClientAccessLevel, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public ClientAccessLevel: HasOne<typeof ClientAccessLevel>

  @hasOne(() => ClientProfile, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public ClientProfile: HasOne<typeof ClientProfile>

  @hasMany(() => ClientTicket, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public Tickets: HasMany<typeof ClientTicket>

  @hasMany(() => ClientTicketAttachment, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public TicketAttachments: HasMany<typeof ClientTicketAttachment>

  @hasMany(() => ClientTicketAnswer, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public TicketAnswers: HasMany<typeof ClientTicketAnswer>

  @hasMany(() => ClientTicketAnswerAttachment, {
    foreignKey: 'client_id',
    localKey: 'id',
  })
  public TicketAnswerAttachments: HasMany<typeof ClientTicketAnswerAttachment>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(clients: Client) {
    if (clients.$dirty.password) {
      clients.password = await Hash.make(clients.password)
    }
  }
}
