const Producto = require('../modelo/modelo.productos')

//Exportamos nuestros Modulos

module.exports.listarProductos = async (data)=> {
    try {
    let producto = new Producto (data)
    console.log(producto)
    let resultado = await producto.listar()
    //console.log(resultado)
    return resultado
    }catch (err) {
        console.log('Error desde el modelo' + err)
        throw new Error ({error: err.message})
    }
}