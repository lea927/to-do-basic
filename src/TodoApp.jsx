import { useState } from 'react'
import './App.css'
import ToDoList from './TodoList'
import ToDoForm from './TodoForm'

function TodoApp() {
  const [todos, setTodos] = useState([])
  const [itemToEdit, setItemToEdit] = useState('')
  const [onEditMode, setOnEditMode] = useState(false)

  const handleSubmit = (taskName) => {
    if (taskName === '') {
      alert('Please enter a task')
      return
    }

    if (onEditMode) {
      const updatedToDos = todos.map((todo, idx) => {
        if (idx === itemToEdit.index) {
          return  {
            ...todo,
            taskName
          }
        }
        return todo
      })

      setTodos(updatedToDos)
      return
    }

    setTodos([
      ...todos,
      {
        taskName,
        isComplete: false
      }
    ])
  }

  const handleCheckboxClick = (index, isComplete) => {
    const updatedToDos = todos.map((todo, idx) => {
      if (idx === index) {
        return {
          ...todo,
          isComplete
        }
      }
      return todo
    })

    setTodos(updatedToDos)
  }

  const handleDelete = (index) => {
    const updatedToDos = todos.filter((_todo, idx) => idx !== index)
    setTodos(updatedToDos)
  }

  const handleEdit = (index) => {
    const itemToEdit = todos.find((_todo, idx) => idx === index)
    setItemToEdit({
      ...itemToEdit,
      index
    })
  }

  const handleMode = (value) => {
    setOnEditMode(value)
  }

  return (
    <>
      <h1 className='uppercase'>Todo List</h1>
      <ToDoList
        items={todos}
        onBoxClick={handleCheckboxClick}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onEditToggle={handleMode}
      />
      <hr />
      <ToDoForm
        onSaveToDo={handleSubmit}
        itemToEdit={itemToEdit}
        onEditToggle={handleMode}
      />
    </>
  )
}

export default TodoApp
