const controladorTienda = require('../controlador/controlador.tienda')

//Exportamos nuestros modulos

module.exports = async (app)=> {
    app.post('/tienda/alta', async (req,res)=> {
        let data = req.body
        try {
            let resultado = await controladorTienda.altaDeProductos(data)
            res.render('alta', {
                titulo: 'Alta de producto',
                marca: req.body.marca,
                modelo: req.body.modelo,
                descripcion: req.body.descripcion

            })
        }catch (err){
            console.log(err)
            res.status(400).render('404', {msj: err.message , titulo: 'Error en la consulta'})
        }
    })
} 