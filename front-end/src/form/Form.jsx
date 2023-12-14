import React from 'react'

function Form() {
  return (
    <div>
        <form className='d-flex justify-content-center pt-2 gap-2'>
            <input 
                className="w-25" type="text" placeholder="Enter a task to add"/>
            <button type = "button" className="text-white bg-black p-1">ADD</button>

        </form>
    </div>
    
  )
}

export default Form