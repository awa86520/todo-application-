 const mongoose = require(" mongoose");
 mongoose.connect("mongodb+srv://aay14155:Awa86520@cluster0.pgvamuv.mongodb.net/");
  const todoSchema = mongoose.schema({
    tittle: string,
    description:  string,
    completed:  Boolean
  })
    const todos = mongoose.model( 'todos ' , todoSchema);

     module.exports =  {
        todo
     }
