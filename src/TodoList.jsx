import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({items, onBoxClick}) => {
  return (
    <div>
      {items.map((item, index) => (
          <ToDoItem
            key={index}
            item={item}
            onBoxClick={onBoxClick}
            index={index}
          />
      ))}
    </div>
  )
}

export default ToDoList