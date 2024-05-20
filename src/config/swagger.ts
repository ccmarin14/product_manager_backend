import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Express } from 'express'
import { productoSchema } from '../schemas/productoSchema'
import { usuarioSchema } from '../schemas/usuarioSchema'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API RESTful con Node.js, TypeScript, Express y Sequelize',
      version: '1.0.0',
      description: 'Documentación de la API RESTful'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ],
    components: {
      schemas: {
        ...productoSchema,
        ...usuarioSchema
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Introduce el token JWT para autenticar'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts']
};

const swaggerSpec = swaggerJSDoc(options)

const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

export default setupSwagger