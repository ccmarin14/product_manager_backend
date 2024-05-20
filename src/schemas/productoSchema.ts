export const productoSchema = {
    Producto: {
      type: 'object',
      properties: {
        handle: {
          type: 'string',
          description: 'Handle del producto'
        },
        title: {
          type: 'string',
          description: 'Título del producto'
        },
        description: {
          type: 'string',
          description: 'Descripción del producto'
        },
        sku: {
          type: 'string',
          description: 'SKU del producto'
        },
        grams: {
          type: 'number',
          format: 'float',
          description: 'Peso en gramos'
        },
        stock: {
          type: 'integer',
          description: 'Cantidad en stock'
        },
        price: {
          type: 'integer',
          description: 'Precio del producto'
        },
        compare_price: {
          type: 'integer',
          description: 'Precio comparativo del producto'
        },
        barcode: {
          type: 'string',
          description: 'Código de barras del producto'
        }
      },
      required: ['handle', 'title', 'description', 'sku', 'grams', 'stock', 'price', 'compare_price']
    }
  }