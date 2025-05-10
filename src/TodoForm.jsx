import React, { useState } from 'react'

const ToDoForm = ({onSaveToDo}) => {
  const [task, setTask] = useState('')

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Take out trash"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" onClick={() => onSaveToDo(task)}>Save</button>
      </div>
    </>
  )
}

export default ToDoForm