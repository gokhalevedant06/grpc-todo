const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

require("./db/conn");


const {addTask,viewTasks} = require('./controllers/Todo')


const PROTO_PATH = 'todo.proto'

const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server();

server.addService(protoDescriptor.Todo.service,{
    addTask,
    viewTasks
  
})

server.bind('http://localhost:8080', grpc.ServerCredentials.createInsecure());

server.start();
console.log(`SERVER IS RUNNING at http://localhost:8080`)