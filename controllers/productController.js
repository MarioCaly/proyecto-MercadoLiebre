let productosController={
listado:function(){},
crear:function(){},
detalle:function(req,res){
    res.send("Bienvenidos al detalle del producto"+req.params.idProducto)
},
detalleComentario:function(req,res){
if (req.params.idComentario==undefined) {
    res.send("Bienvenidos a los comentarios del producto")
    
}else{
    res.send("Bienvenidos ")
}
}
}
module.exports=productosController;