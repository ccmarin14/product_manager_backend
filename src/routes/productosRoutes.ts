import express from 'express'
import { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } from '../controllers/productosController'
import { verificarJWT } from '../middlewares/jwtMiddleware'

const router = express.Router()

router.get('/productos', verificarJWT, obtenerProductos)
router.post('/productos', verificarJWT, crearProducto)
router.put('/productos/:handle', verificarJWT, actualizarProducto)
router.delete('/productos/:handle', verificarJWT, eliminarProducto)

export default router