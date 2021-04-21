# Examen de desarrollo Web
_Aplicacíon web para poner a prueba los conocimientos básicos del desarrollo Web Full Stack

## Objetivos
* Realizar un login a la aplicacion e identificar al usuario.
* Crear sitio donde SOLO los supervisores hagan CRUD (Create, Read, Update, Delete) en la tabla de productos. PD1: En caso de que el usuario no sea supervisor mostrar una alerta que indique no cuenta con los permisos necesarios. PD2: eliminar logicamente los productos
* Crear un apartado para el cliente donde pueda hacer nueva compra, se le deben mostrar las compras hechas anteriormente y crear nuevas compras


## Prerequisitos
* MySQL >= 5.7 
* NodeJS >= 10.24.1
* Para el fronted se deja al criterio de cada programador

## Backend
Para el backend se desarrollo una API REST hecha con el framework express, consume una base de datos relacional (MySQL). Mas abajo se enlistan las tablas y las rutas para realizar el CRUD necesario.

### Instalación
Para instalar las dependencias del proyecto primero hay que entrar a la carpeta llamada backend y escribir el siguiente comando:
```
npm i
```

### Ejecución
Para poner en marcha el proyecto tenemos que ejecutar el comando que se muestra a continuación

```
npm run dev
```

### Base de datos
La base de datos cuenta con las siguientes tablas

```SQL
+--------------------------------+   
|        tipo_usuarios           |
+----------------+---------------+
| idTipoUsuario  | descripcion   |
+----------------+---------------+
|    1           | Administrador | 
|    2           | Supervisor    |
|    3           | Cliente       | 
+----------------+---------------+

+--------------------------------+
|        departamentos           |
+----------------+---------------+
| IdDepartamento  | descripcion  |
+----------------+---------------+
|    1           | Tecnologia    | 
|    2           | Papeleria     |
|    3           | Oficina       | 
+----------------+---------------+


+-----------------------------------------------------------------------------------------+
|                                    usuarios                                             |
+------------+----------------+-------------------+----------------------+----------------+
| idUsuario  | idTipoUsuario  |  nombre           |  usuario             |    contrasena  |
+------------+----------------+-------------------+----------------------+----------------+
|  null      |     null       |      null         |    null              |   null         |
+------------+----------------+-------------------+----------------------+----------------+

+------------------------------------------------------------------------+
|                         productos                                      |
+------------+----------------+-------------------+----------------------+
| idProducto  | idDepartamento  |  descripcion           |  precio       |   
+------------+----------------+-------------------+----------------------+
|  null      |     null       |      null         |    null              |
+------------+----------------+-------------------+----------------------+


+-------------------------------------------------------------------------------------------------------+
|                                                  ventas                                               |
+----------+------------+-------------------+--------------+-----------------------+--------------------+
| idVenta  | idUsuario  |  importeTotal     |  fecha       |    cantidadProductos  |  estatusEliminar   |
+----------+------------+-------------------+--------------+-----------------------+--------------------+
|  null    |     null   |      null         |    null      |     null              |      null          |
+----------+------------+-------------------+--------------+-----------------------+--------------------+

+--------------------------------------------------------------------------------------------+
|                                                  subventas                                 |
+----------+------------+-------------------+-------------+-------------+--------------------+
| idSubVenta  | idVenta  |  idProducto     |  cantidad    |    importe  |  estatusEliminar   |
+-------------+----------+-----------------+--------------+-----------------------+----------+
|  null       |   null   |      null       |    null      |     null    |      null          |
+-------------+----------+-------------------+------------+-------------+--------------------+

```

### Metodos y rutas API REST
Listar todos los departamentos en la base de datos
```
GET http://ip:3000/api/v1/departamentos/traerTodos
```

