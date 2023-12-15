import React, { useState } from 'react';
import axios from 'axios'

function Form() {

  const [task, setTask] = useState()
  function handleAddClick(){
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => console.log(result))
    .catch(err =>{
      alert("Failed to add the task, try again!")
    })
  }
  
  return (
    <div>
        <form className='d-flex justify-content-center pt-2 gap-2'>
            <input onChange={(e) =>setTask(e.target.value)}
                className="p-2 txt-input" type="text" placeholder="Enter a task to add"/>
            <button onClick={handleAddClick} type = "button" className="text-white bg-black p-1">ADD</button>

        </form>
    </div>
    
  )
}

export default Form