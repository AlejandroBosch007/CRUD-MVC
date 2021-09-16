const controladorProductos = require('../controlador/controlador.productos')
//Exportamos nuestros modulos

module.exports = async (app) => {
    app.get('/productos', async (req,res) =>{
        let data = req.body.metodo
        try {
           let resultado = await controladorProductos.listarProductos(data)
           console.log(resultado)
           res.render("index", {result: resultado})
        }catch (err){
            console.log(err)
            res.status(400).json('Error en la consulta')
        }
    })
}