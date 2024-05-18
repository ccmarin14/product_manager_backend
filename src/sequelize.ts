import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('product_manager', 'root', 'wz15h389faz', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize