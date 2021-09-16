const sequelize = require('../db/db.conexion')

//Exportamos nuestro modelo

module.exports = class Producto {
    constructor (producto){
        this.producto = producto
    }

    async listar () {
        console.log('metodo ' + this.producto)
        let resultado = await sequelize.query('SELECT * FROM productos')
        let solucion = resultado[0][0][this.producto]
        return solucion
    }
}