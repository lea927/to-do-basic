import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({items, onBoxClick, onDelete}) => {
  return (
    <div>
      {items.map((item, index) => (
          <ToDoItem
            key={index}
            item={item}
            onBoxClick={onBoxClick}
            index={index}
            onDelete={onDelete}
          />
      ))}
    </div>
  )
}

export default ToDoList