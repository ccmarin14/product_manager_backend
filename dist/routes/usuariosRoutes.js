"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuariosController_1 = require("../controllers/usuariosController");
const router = express_1.default.Router();
router.post('/usuarios/registrar', usuariosController_1.registrarUsuario);
router.post('/usuarios/recuperar-contraseña', usuariosController_1.recuperarContraseña);
router.post('/usuarios/login', usuariosController_1.autenticarUsuario);
router.get('/usuarios/ver-usuarios', usuariosController_1.verUsuarios);
exports.default = router;
