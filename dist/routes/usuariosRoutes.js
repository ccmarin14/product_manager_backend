"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuariosController_1 = require("../controllers/usuariosController");
const router = express_1.default.Router();
/**
 * @swagger
 * /usuarios/registrar:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               user:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error al crear el usuario
 */
router.post('/usuarios/registrar', usuariosController_1.registrarUsuario);
/**
 * @swagger
 * /usuarios/recuperar:
 *   post:
 *     summary: Recupera la contraseña de un usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña recuperada
 *       404:
 *         description: Usuario no encontrado
 */
router.post('/usuarios/recuperar-contraseña', usuariosController_1.recuperarContraseña);
/**
 * @swagger
 * /usuarios/autenticar:
 *   post:
 *     summary: Autentica un usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: JWT Token
 *       401:
 *         description: Credenciales inválidas
 */
router.post('/usuarios/login', usuariosController_1.autenticarUsuario);
router.get('/usuarios/ver-usuarios', usuariosController_1.verUsuarios);
exports.default = router;
