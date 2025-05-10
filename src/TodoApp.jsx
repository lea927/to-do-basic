import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import ToDoForm from './TodoForm'

function TodoApp() {
  const [todos, setTodos] = useState([])

  const handleSubmit = (taskName) => {
    if (taskName === '') {
      alert('Please enter a task')
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

  return (
    <>
      <h1 className='uppercase'>Todo List</h1>
      <ToDoList items={todos} onBoxClick={handleCheckboxClick} />
      <hr />
      <ToDoForm onSaveToDo={handleSubmit}/>
    </>
  )
}

export default TodoApp
