import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';

interface UsuarioAttributes {
  id: number;
  name: string;
  user: string;
  password: string;
}

class Usuario extends Model<UsuarioAttributes> implements UsuarioAttributes {
  public id!: number;
  public name!: string;
  public user!: string;
  public password!: string;
}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
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
});

export default Usuario;