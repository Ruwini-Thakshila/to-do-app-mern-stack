import React, { useEffect, useState } from 'react'
import Form from '../form/Form'
import axios from 'axios';

function Main() {
  const [tasks, setTasks] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:3001/get')
    .then(task => setTasks(task.data))
    .catch(err => {
      alert("Failed to load the tasks, try again!");
    })
  })

  function handleEdit(){
    
  }

  return (
    <div className='main-container d-flex flex-column justify-content-center align-items-center border m-2 p-2'>
      <header className='border-bottom d-flex justify-content-center align items-center'>
        <h2>To do App</h2>
      </header>
      <Form />
      {
        tasks.length === 0 ?
          <div><p className='text-center mt-2'>No tasks yet!</p></div>
        :
          tasks.map(task => (
          <div className='px-2 task mt-2 d-flex justify-content-between align-items-center bg-black text-white border'>
              <div onClick={handleEdit} className='d-flex gap-1 align-items-center'>
                <i class="icons text-white bi bi-circle-fill"></i>
                <p>{task.description}</p>
              </div>
              <div>
                <i class="icons text-white bi bi-trash-fill"></i>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default Main