import React from "react";

import {AddTaskRequest,ViewTaskRequest} from './todo_pb'
import { TodoClient } from "./todo_grpc_web_pb";

export const client = new TodoClient(
  "http://localhost:9090",
  null,
  null
);


function App() {

  const add = ()=>{
    // const task = new AddTaskRequest();
    // console.log(task);
    // task.setTitle("TITLE")
    // task.setDescription("DESCription")
    // console.log(task)

    // console.log(client)

    // client.addTask(task,{},(err,response) =>{
    //   console.log("I AM HERE")
    //   console.log(response,err)
    // })

    const alltasks = new ViewTaskRequest();
    client.viewTasks(alltasks,{},(req,err)=>{
      console.log(err,req)
    })

  }




  return (
   <>
   <div>HEllo</div>
   <button onClick={()=>add()}> Click Here</button>
   </>
  );
}

export default App;
