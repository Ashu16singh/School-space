const data =require("./db.json")
const jsonServer =require("json-server");
const server = jsonServer.create();
const router=jsonServer.router(data);
const middleware =jsonServer.default();
const PORT =process.env.PORT|| 5000;
server.use(middleware);
server.use(router)
server.listen(PORT,()=>{
    console.log("Server is running");
});
    