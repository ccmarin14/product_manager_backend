import express from 'express'
import {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
  } from '../controllers/productosController';
import { verificarJWT } from '../middlewares/jwtMiddleware'

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Endpoints para la gestión de productos
 */

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 *       500:
 *         description: Error al obtener los productos
 */
router.get('/productos', verificarJWT, obtenerProductos)

/**
 * @swagger
 * /api/productos/{handle}:
 *   get:
 *     summary: Obtiene un producto por handle
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: handle
 *         schema:
 *           type: string
 *         required: true
 *         description: Handle del producto
 *     responses:
 *       200:
 *         description: Datos del producto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al obtener el producto
 */
router.get('/:handle', verificarJWT, obtenerProductoPorId);

/**
 * @swagger
 * /api/productos:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *       400:
 *         description: Error al crear el producto
 */
router.post('/productos', verificarJWT, crearProducto)

/**
 * @swagger
 * /api/productos/{handle}:
 *   put:
 *     summary: Actualiza un producto existente
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: handle
 *         schema:
 *           type: string
 *         required: true
 *         description: Handle del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       400:
 *         description: Error al actualizar el producto
 *       404:
 *         description: Producto no encontrado
 */
router.put('/productos/:handle', verificarJWT, actualizarProducto)

/**
 * @swagger
 * /api/productos/{handle}:
 *   delete:
 *     summary: Elimina un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: handle
 *         schema:
 *           type: string
 *         required: true
 *         description: Handle del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al eliminar el producto
 */
router.delete('/productos/:handle', verificarJWT, eliminarProducto)

export default router

