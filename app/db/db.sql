CREATE DATABASE productos_tecla
GO

USE productos_tecla
GO

CREATE TABLE productos (
    id int NOT NULL IDENTITY (1,1),
    listado char (50) NOT NULL,
    alta char (50) NOT NULL,
    modificacion char (50) NOT NULL,
    baja char (50) NOT NULL,
    PRIMARY KEY (id)
)
GO

CREATE TABLE tienda_productos (
    id_productos int NOT NULL IDENTITY (1,1),
    marca char (50) NOT NULL,
    modelo char (50) NOT NULL,
    descripcion char (100) NULL,
    PRIMARY KEY (id_productos)
)
GO

INSERT INTO productos (listado,alta,modificacion,baja) VALUES (
    'Listado de productos dinamico de la DB',
    'Alta de productos dinamico de la DB',
    'Modificacion de productos dinamico desde la DB',
    'Baja de productos dinamico desde la DB'
)