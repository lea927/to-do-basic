import React from 'react'

const ToDoItem = ({index, item, onBoxClick, onDelete, onEdit, onEditToggle}) => {
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={(e) => onBoxClick(index, e.target.checked)}
        />
        <p className='inline'> {item.taskName}</p>
        <button type="submit" onClick={() => onDelete(index)}>Delete</button>
        <button type="submit" onClick={() => {
          onEdit(index)
          onEditToggle(true)
        }}>Edit</button>
      </div>
    </>
  )
}

export default ToDoItem