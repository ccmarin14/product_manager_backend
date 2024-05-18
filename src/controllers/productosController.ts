import { Request, Response } from 'express'
import Producto from '../models/Producto'

export const obtenerProductos = async (req: Request, res: Response) => {
  try {
    const productos = await Producto.findAll()
    res.json(productos)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' })
  }
}

export const crearProducto = async (req: Request, res: Response) => {
  try {
    const producto = await Producto.create(req.body)
    res.status(201).json(producto)
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el producto' })
  }
}

export const actualizarProducto = async (req: Request, res: Response) => {
  try {
    const handle = req.params.handle
    const producto = await Producto.findByPk(handle)
    if (producto) {
      await producto.update(req.body)
      res.json(producto)
    } else {
      res.status(404).json({ error: 'Producto no encontrado' })
    }
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el producto' })
  }
}

export const eliminarProducto = async (req: Request, res: Response) => {
  try {
    const handle = req.params.handle
    const producto = await Producto.findByPk(handle)
    if (producto) {
      await producto.destroy()
      res.status(204).send()
    } else {
      res.status(404).json({ error: 'Producto no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' })
  }
}
