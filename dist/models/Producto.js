"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Producto extends sequelize_1.Model {
}
Producto.init({
    handle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    sku: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    grams: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    compare_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    barcode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: database_1.default,
    modelName: 'Producto',
    tableName: 'productos'
});
exports.default = Producto;
