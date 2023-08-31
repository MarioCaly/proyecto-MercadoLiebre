const express=require("express");
const rutasProductos =require("./routes/productos.js");
const rutasMain=require("./routes/main.js")
const app=express();
const path=require("path")
app.use(express.static("public"))
app.listen("3000", function () {
    console.log("Servidor corriendo")} )

app.use("/",rutasMain); 
app.use("/productos",rutasProductos)

