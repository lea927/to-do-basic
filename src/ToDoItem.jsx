import React from 'react'

const ToDoItem = ({index, item, onBoxClick, onDelete, onEdit, onEditToggle}) => {
  return (
    <>
      <div className='flex justify-between bg-white p-3 rounded'>
        <div>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={(e) => onBoxClick(index, e.target.checked)}
          />
          <p className='inline text-xl'> {item.taskName}</p>
        </div>
        <div className='inline'>
          <button type="submit" onClick={() => onDelete(index)}>Delete</button>
          <button type="submit" onClick={() => {
            onEdit(index)
            onEditToggle(true)
          }}>Edit</button>
        </div>
      </div>
    </>
  )
}

export default ToDoItem