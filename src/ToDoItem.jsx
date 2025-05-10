import React from 'react'

const ToDoItem = ({index, item, onBoxClick}) => {
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={(e) => onBoxClick(index, e.target.checked)}
        />
        <p className='inline'> {item.taskName}</p>
      </div>
    </>
  )
}

export default ToDoItem