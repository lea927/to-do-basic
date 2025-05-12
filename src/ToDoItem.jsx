import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa';

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
          <button className='p-3' type="submit" onClick={() => onDelete(index)}>
            <FaTrash className=''/>
          </button>
          <button className='p-3' type="submit" onClick={() => {
            onEdit(index)
            onEditToggle(true)
          }}>
            <FaEdit />
          </button>
        </div>
      </div>
    </>
  )
}

export default ToDoItem