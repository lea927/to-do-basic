import React, { useState, useEffect } from 'react'

const ToDoForm = ({onSaveToDo, itemToEdit, onEditToggle, show, onClose}) => {
  const [task, setTask] = useState('')
  const { taskName } = itemToEdit

  useEffect(()=> {
    setTask(taskName)
  }, [taskName])

  if (!show) return null;

  return (
    <>
      <div className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-2 right-2" onClick={onClose}>✕</button>
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
      </div>
    </>
  )
}

export default ToDoForm