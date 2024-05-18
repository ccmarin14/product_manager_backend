import express from 'express'
import { 
    registrarUsuario, 
    recuperarContraseña, 
    autenticarUsuario, 
    verUsuarios 
} from '../controllers/usuariosController'

const router = express.Router()

router.post('/usuarios/registrar', registrarUsuario)
router.post('/usuarios/recuperar-contraseña', recuperarContraseña)
router.post('/usuarios/login', autenticarUsuario)
// router.get('/usuarios/ver-usuarios', verUsuarios)

export default router