import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  hasOne,
  HasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Ticket from './Ticket'
import TicketAnswer from './TicketAnswer'
import TicketAnswerAttachment from './TicketAnswerAttachment'
import TicketAttachment from './TicketAttachment'
import UserProfile from './UserProfile'
import UserSector from './UserSector'

export default class Users extends BaseModel {
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
  public rememberMeToken?: string

  @column()
  public sector_id?: number

  @column()
  public deactivated: boolean

  @hasOne(() => UserSector, {
    foreignKey: 'sector_id',
    localKey: 'id',
  })
  public UserSector: HasOne<typeof UserSector>

  @hasOne(() => UserProfile, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public UserProfile: HasOne<typeof UserProfile>

  @hasMany(() => Ticket, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public Tickets: HasMany<typeof Ticket>

  @hasMany(() => TicketAttachment, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public TicketAttachments: HasMany<typeof TicketAttachment>

  @hasMany(() => TicketAnswer, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public TicketAnswers: HasMany<typeof TicketAnswer>

  @hasMany(() => TicketAnswerAttachment, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public TicketAnswerAttachments: HasMany<typeof TicketAnswerAttachment>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(users: Users) {
    if (users.$dirty.password) {
      users.password = await Hash.make(users.password)
    }
  }
}
