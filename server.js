const jsonServer =require("json-server");
const server = jsonServer.create();
const router=jsonServer.router("./db.json");
const cors =require("cors")
const middleware =jsonServer.default({
    static:"./build"
});
const PORT =process.env.PORT|| 3002;
server.use(middleware);
server.use(
    jsonServer.rewriter({
        "/api/*":"/$1",
    })
);

server.use(router);
server.use(cors);
server.listen(PORT,()=>{
    console.log("Server is running");
});
    
