# pp-georgina-puig-back

## Table of contents
- [pp-georgina-puig-back](#pp-georgina-puig-back)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)

## General info

API para registro y consulta de usuarios.

1. Crear un proyecto con NodeJS para el desarrollo de una API REST.
 - Se debe considerar un método de autenticación a cada solicitud.
 - Aplicar las medidas necesarias para mejorar el rendimiento en base al tiempo y tamaño de respuesta.
 
2. Conecta una base de datos en MongoDB.
2.1. Define un modelo con las siguientes propiedades:
- Nombre
- Correo
- Teléfono
- Contraseña
- Edad
- Género
- Pasatiempo
- Fecha de registro
2.2 Se deberán las validaciones pertinentes en cada tipo de dato.
2.3 La contraseña del usuario deberá ser protegida con encriptación de datos.

3. Crea una ruta para poder agregar un nuevo registro.

4. Crea una ruta para poder consultar a todos los usuarios. Además, deberás agregar alguna
forma para poder buscar a usuarios por nombre y pasatiempo, todo bajo el mismo recurso
(ruta).

5. Crea una ruta para poder borrar un registro.

6. Crea una ruta para consultar (nombre, teléfono, pasatiempo) de todos los usuarios que
sean mayores a 18 años con un género ‘Masculino’ creados en los últimos 3 días, agrupando a
todos los que tiene el mismo pasatiempo. Todo tendrá que ser resultado de una consulta a la
base de datos.

## Technologies

* Nodejs
* Express
* Mongodb
* Mongoose
* Dotenv
* JWT
* Bcryptjs
