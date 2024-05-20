import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/database'

interface UsuarioAttributes {
  name: string
  user: string
  password: string
}

class Usuario extends Model<UsuarioAttributes> implements UsuarioAttributes {
  public id!: number
  public name!: string
  public user!: string
  public password!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Usuario.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'usuarios'
})

export default Usuario