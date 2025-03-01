import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/createTodo'

function App() {
   const[ todos , SetTodos ] = useState([]);

      fetch("http://localhost:3000/todos")
      .then( async function (res){
        const json = await res.json();
         SetTodos( json ,todos)

      })

 

  return (
  
     <div>
       <CreateTodo></CreateTodo>
        <Todos todos = {todos}> </Todos>

     </div>
    
  )
}

export default App
