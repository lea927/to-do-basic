import React, { useState, useEffect } from 'react'

const ToDoForm = ({onSaveToDo, itemToEdit, onEditToggle}) => {
  const [task, setTask] = useState('')
  const { taskName } = itemToEdit

  useEffect(()=> {
    setTask(taskName)
  }, [taskName])

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
          onEditToggle(false)
        }}>Save</button>
      </div>
    </>
  )
}

export default ToDoForm