"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verificarJWT = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Token de autenticación no proporcionado' });
    }
    jsonwebtoken_1.default.verify(token, 'secreto', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token de autenticación inválido' });
        }
        req.body.usuario = decoded.usuario;
        next();
    });
};
exports.verificarJWT = verificarJWT;
