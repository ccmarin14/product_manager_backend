import express from 'express'
import { 
    registrarUsuario, 
    recuperarContrasena, 
    autenticarUsuario,
    cambioContrasena
} from '../controllers/usuariosController'

const router = express.Router()

/**
 * @swagger
 * /api/usuarios/registrar:
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
router.post('/usuarios/registrar', registrarUsuario)

/**
 * @swagger
 * /api/usuarios/recuperar:
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
router.post('/usuarios/recuperar', recuperarContrasena)

/**
 * @swagger
 * /api/usuarios/inicio:
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
router.post('/usuarios/inicio', autenticarUsuario)

/**
 * @swagger
 * /api/usuarios/cambio:
 *   post:
 *     summary: Cambia contraseña
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
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña cambiada exitosamente
 *       400:
 *         description: Contraseña antigua incorrecta
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al cambiar la contraseña
 */
router.post('/usuarios/cambio', cambioContrasena)

export default router