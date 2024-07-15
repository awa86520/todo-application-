const express = require("express");
const { createTodo, updateTodo } = require("./types");
const cors = require("cors");
const app = express();
// const cors = require("cors");

 app.use( express.json());
  app.use( cors());

   app.post("/todo" , async function( req , res){

     createPayload = req.body;
     parsedPayload =  createTodo.safeParse( createPayload);
      if( !parsedPayload.success){
        res.status( 411).json({
            msg : " you sent wrong input",
        })
        return ;
    }
     // put it in mongo dp
      await todo.create({
         tittle : createPayload.tittle,
         description : createPayload.description,
          completed : false 
      })
       res.json({
        msg : " todo created"
       })
      

   })
    app.get("/todos" ,  async function( req , res){
       const todo = await todo.find({});
        
        res.json({
           todos
        })

    })
     app.put("/completed" , async function( req , res){
         const updatePayload = req.body;
         const parsedPayload = updateTodo.safeParse( updatePayload);
          if( !parsedPayload.success){
            res.status( 411).json({
                msg : " you sent wrong input",
            })
             return ;
          }
           await todo.update({
            _id: req.body.id
           } , {
              completed: true
           

           })
            res.json({
              msg : " todos marked as done  "
            })
           

     })
      app.listen( 3000);
      // basic  express boilerate plate 
