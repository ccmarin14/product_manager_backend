import { Request, Response } from 'express'
import Usuario from '../models/Usuario'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registrarUsuario = async (req: Request, res: Response) => {
  try {
    const { name, user, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const nuevoUsuario = await Usuario.create({ name, user, password: hashedPassword })
    res.status(201).json(nuevoUsuario)
  } catch (error) {
    res.status(400).json({ error: 'Error al registrar el usuario' })
  }
}

export const recuperarContrasena = async (req: Request, res: Response) => {
  try {
    const { user, newPassword } = req.body
    const usuario = await Usuario.findOne({ where: { user } })
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10)
    await usuario.update({ password: hashedPassword })
    res.status(200).json({ message: 'Contraseña actualizada exitosamente' })
  } catch (error) {
    res.status(400).json({ error: 'Error al recuperar la contraseña' })
  }
}

export const autenticarUsuario = async (req: Request, res: Response) => {
  try {
    const { user, password } = req.body
    const usuario = await Usuario.findOne({ where: { user } })
    if (!usuario) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' })
    }
    const esValido = await bcrypt.compare(password, usuario.password)
    if (!esValido) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' })
    }
    const token = jwt.sign({ user: usuario.user }, 'secreto', { expiresIn: '1h' })
    res.status(200).json({ token })
  } catch (error) {
    res.status(400).json({ error: 'Error al autenticar el usuario' })
  }
}

export const cambioContrasena = async (req: Request, res: Response) => {
  const { user, oldPassword, newPassword } = req.body

  try {
    const usuario = await Usuario.findOne({ where: { user } })

    if (!usuario) {
      return res.status(404).send('Usuario no encontrado')
    }

    const isMatch = await bcrypt.compare(oldPassword, usuario.password)
    if (!isMatch) {
      return res.status(400).send('Contraseña antigua incorrecta')
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    usuario.password = hashedPassword;
    await usuario.save()

    res.status(200).send('Contraseña cambiada exitosamente')
  } catch (error) {
    res.status(500).send('Error al cambiar la contraseña')
  }
};
