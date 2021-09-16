const sequelize = require('../db/db.conexion')

//Exportamos nuestro modelo

module.exports = class Tienda {
    constructor (producto){
        this.nuevoProsucto = producto
    }

    async alta() {
        try {
            let product = [this.nuevoProsucto.marca, this.nuevoProsucto.modelo, this.nuevoProsucto.descripcion]
            let resultado = await sequelize.query('INSERT INTO tienda_productos (marca, modelo, descripcion) VALUES (?,?,?)', 
            {replacements: product, type: sequelize.QueryTypes.SELECT})
            console.log(resultado)
            return resultado
        }catch(err){
            console.log(err)
            throw new Error ({message:err.message})
        }
    };

}