"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('product_manager', 'root', 'wz15h389faz', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
