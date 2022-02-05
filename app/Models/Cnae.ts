import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ClientJuridica from './ClientJuridica'
import UserJuridica from './UserJuridica'

export default class Cnae extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cnae: string

  @column()
  public description: string

  @hasMany(() => ClientJuridica, {
    foreignKey: 'cnae',
    localKey: 'cnae',
  })
  public ClientJuridica: HasMany<typeof ClientJuridica>

  @hasMany(() => UserJuridica, {
    foreignKey: 'cnae',
    localKey: 'cnae',
  })
  public UserJuridica: HasMany<typeof UserJuridica>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
