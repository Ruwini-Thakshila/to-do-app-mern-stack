import React, { useState } from 'react'
import Form from '../form/Form'

function Main() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <header className='p-2 border-bottom d-flex justify-content-center align items-center'>
        <h2>To do App</h2>
      </header>
      <Form />
      {
        tasks.length === 0 ?
          <div><p className='text-center mt-2'>No tasks yet!</p></div>
        :
          tasks.map(task => (
          <div>
              {task}
          </div>
        ))
      }
    </>
  )
}

export default Main