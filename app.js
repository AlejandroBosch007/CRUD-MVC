//Importo los modulos necesarios
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const vistaProductos = require('./app/vista/vista.productos')
const vistaTienda = require('./app/vista/vista.tienda')
const sequelize = require('./app/db/db.conexion')

//Middleware globales
app.use(express.json())
app.use(cors())

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')



//Levantamos nuestro servidor
async function inicioServer() {
    try {
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en htt://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();


//Usamos routes
vistaProductos(app)
vistaTienda(app)

