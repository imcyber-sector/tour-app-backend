import {Server} from './server';

let server = new Server();
let port = server.port;
let app = server.app;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

process.on("unhandledRejection",error=>{
    console.log("====%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",error);   
})
process.on("uncaughtException",error=>{
    console.log("====%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%",error);   
})