# Proyecto de API REST con Node.js, TypeScript, Express y Sequelize
Este proyecto es una API REST desarrollada en Node.js utilizando TypeScript como lenguaje de programación, Express como framework web, Sequelize como ORM para interactuar con una base de datos MariaDB y JWT para proteger las rutas privadas.

## Requisitos
Node.js y npm instalados en tu máquina.

## Instalación

- Clona este repositorio en tu máquina local usando git clone.
- Ve al directorio del proyecto usando cd nombre-del-proyecto.
- Instala las dependencias con el comando `npm install`.

## Base de Datos

Antes de ejecutar la aplicación, asegúrate de configurar correctamente tu base de datos. Abre el archivo src/config/database.ts y proporciona los detalles de tu base de datos MariaDB o MySQL.

Creación de la Base de Datos y Tablas

Para crear la base de datos y las tablas con los datos, ejecuta el script SQL proporcionado en tu sistema de gestión de bases de datos (por ejemplo, MySQL Workbench, phpMyAdmin, etc.).

Para más detalles sobre la estructura de la base de datos utilizada por este proyecto, consulta la documentación en [este enlace](database/README.md).

## Configuración

Copia el archivo .env.example y nómbralo .env.
Completa las variables de entorno en el archivo .env según sea necesario.

## Uso

Ejecuta el servidor en modo desarrollo con el comando `npm run dev`.
Accede a la API en http://localhost:3000.

## Documentación

La documentación de la API está disponible en http://localhost:3000/api-docs.

## Autor

Nombre del autor - Cristian Camilo Marin Florez.
