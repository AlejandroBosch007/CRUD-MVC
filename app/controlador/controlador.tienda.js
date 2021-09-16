const Tienda = require('../modelo/modelo.tienda')

//Exportamos nuestros modulos

module.exports.altaDeProductos = async (data)=> {
    try{
        let productos = new Tienda (data)
        let resultado = await productos.alta()
        return resultado
    }catch (err){
        console.log(err)
        throw new Error ({error: err.message})
    }
}