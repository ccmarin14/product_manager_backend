import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const verificarJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ error: 'Token de autenticación no proporcionado' })
  }

  jwt.verify(token, 'secreto', (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ error: 'Token de autenticación inválido' })
    }
    req.body.usuario = decoded.usuario
    next()
  })
}