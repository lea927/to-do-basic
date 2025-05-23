import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({items, onBoxClick, onDelete, onEdit, onEditToggle}) => {
  return (
    <div className='bg-gray-100 rounded-lg p-6'>
      {items.map((item, index) => (
          <ToDoItem
            key={index}
            item={item}
            onBoxClick={onBoxClick}
            index={index}
            onDelete={onDelete}
            onEdit={onEdit}
            onEditToggle={onEditToggle}
          />
      ))}
    </div>
  )
}

export default ToDoList