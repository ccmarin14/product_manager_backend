import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/database'

interface ProductoAttributes {
  handle: string
  title: string
  description: string
  sku: string
  grams: number
  stock: number
  price: number
  compare_price: number
  barcode: string | null
}

class Producto extends Model<ProductoAttributes> implements ProductoAttributes {
  public handle!: string
  public title!: string
  public description!: string
  public sku!: string
  public grams!: number
  public stock!: number
  public price!: number
  public compare_price!: number
  public barcode!: string | null
}

Producto.init({
  handle: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: ''
  },
  grams: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  compare_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  barcode: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Producto',
  tableName: 'productos'
})

export default Producto