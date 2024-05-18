import express from 'express'
import productosRoutes from './routes/productosRoutes'
import usuariosRoutes from './routes/usuariosRoutes'

const app = express()
app.use(express.json())

app.use('/api', productosRoutes)
app.use('/api', usuariosRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})