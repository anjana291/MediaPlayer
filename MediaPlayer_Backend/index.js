//1) import json-server library(using require keyword)
const jsonServer = require('json-server')

//2) create server using create function inside json-server library
const mediaPlayerServer = jsonServer.create()

//3) create path for db.json file - router() method is used
const router = jsonServer.router('db.json')

//4) create a middleware to convert json to js
const middleware = jsonServer.defaults()

//5) server should use router as well as middleware - use()
mediaPlayerServer.use(middleware) //converts data
mediaPlayerServer.use(router)     //

//6) set a port to server
//process.env : to select another available port when the 6000 is consumed or used
const PORT = 4000 || process.env

//7) run the server
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Server Running Successfully at port ${PORT}`);
})