const express=require("express");
const rutasProductos =require("./routes/productos.js");
const rutasMain=require("./routes/main.js")
const app=express();
const path=require("path")
app.use(express.static("public"))
const port=process.env.PORT || 3001;
/*app.listen("3000", function () {
    console.log("Servidor corriendo")} )*/
app.listen(port,()=>console.log('Sevidor correindo en el puerto ${port}'));

app.use("/",rutasMain); 
app.use("/productos",rutasProductos)

