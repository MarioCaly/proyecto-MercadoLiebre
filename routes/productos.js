let express=require("express")
let router=express.Router();
let productosController=require("../controllers/productController");

router.get("/idProducto",productosController.detalle);
router.get("/idProducto/comentarios/:idComentario",productosController.detalleComentario);

module.exports=router;
