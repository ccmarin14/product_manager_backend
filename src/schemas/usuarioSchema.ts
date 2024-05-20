export const usuarioSchema = {
    Usuario: {
      type: 'object',
      required: ['name', 'user', 'password'],
      properties: {
        id: {
          type: 'integer',
          description: 'ID del usuario'
        },
        name: {
          type: 'string',
          description: 'Nombre del usuario'
        },
        user: {
          type: 'string',
          description: 'Nombre de usuario'
        },
        password: {
          type: 'string',
          description: 'Contraseña del usuario'
        }
      }
    },
    LoginRequest: {
      type: 'object',
      required: ['user', 'password'],
      properties: {
        user: {
          type: 'string',
          description: 'Nombre de usuario'
        },
        password: {
          type: 'string',
          description: 'Contraseña del usuario'
        }
      }
    },
    LoginResponse: {
      type: 'object',
      properties: {
        token: {
          type: 'string',
          description: 'JWT generado después de la autenticación exitosa'
        }
      }
    }
  }
  