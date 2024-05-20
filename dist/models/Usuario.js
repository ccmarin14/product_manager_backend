"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Usuario extends sequelize_1.Model {
}
Usuario.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    user: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_1.default,
    modelName: 'Usuario',
    tableName: 'usuarios'
});
exports.default = Usuario;
