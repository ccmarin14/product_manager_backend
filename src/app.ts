import express from 'express';
import bodyParser from 'body-parser';
import productosRoutes from './routes/productosRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import setupSwagger from './config/swagger';

const app = express()
app.use(express.json())

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/api', productosRoutes);
app.use('/api', usuariosRoutes);

setupSwagger(app);

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})