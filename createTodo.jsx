  export function CreateTodo(){
    return <div>
        <input style = {{
            padding: 10,
            margin: 10,
        }} type = " text " placeholder="tittle" ></input><br />

         <input style ={{
            padding: 10,
            margin: 10,
         }} type = "text" placeholder="description">
          
         </input><br/>
          <button onClick >Add a todo </button>
    </div>
 }