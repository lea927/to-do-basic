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
          value={task}
        />
        <button type="submit" onClick={() => {
          onSaveToDo(task)
          setTask('')
        }}>Save</button>
      </div>
    </>
  )
}

export default ToDoForm