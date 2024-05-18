"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verUsuarios = exports.autenticarUsuario = exports.recuperarContraseña = exports.registrarUsuario = void 0;
const Usuario_1 = __importDefault(require("../models/Usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, user, password } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const nuevoUsuario = yield Usuario_1.default.create({ name, user, password: hashedPassword });
        res.status(201).json(nuevoUsuario);
    }
    catch (error) {
        res.status(400).json({ error: 'Error al registrar el usuario' });
    }
});
exports.registrarUsuario = registrarUsuario;
const recuperarContraseña = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, newPassword } = req.body;
        const usuario = yield Usuario_1.default.findOne({ where: { user } });
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(newPassword, 10);
        yield usuario.update({ password: hashedPassword });
        res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
    }
    catch (error) {
        res.status(400).json({ error: 'Error al recuperar la contraseña' });
    }
});
exports.recuperarContraseña = recuperarContraseña;
const autenticarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, password } = req.body;
        const usuario = yield Usuario_1.default.findOne({ where: { user } });
        if (!usuario) {
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }
        const esValido = yield bcrypt_1.default.compare(password, usuario.password);
        if (!esValido) {
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }
        const token = jsonwebtoken_1.default.sign({ user: usuario.user }, 'secreto', { expiresIn: '1h' });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(400).json({ error: 'Error al autenticar el usuario' });
    }
});
exports.autenticarUsuario = autenticarUsuario;
const verUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield Usuario_1.default.findAll();
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});
exports.verUsuarios = verUsuarios;
