import { useState } from 'react'
import './App.css'
import ToDoList from './TodoList'
import ToDoForm from './TodoForm'
import { useEffect } from 'react'

function TodoApp() {
  const [todos, setTodos] = useState([])
  const [itemToEdit, setItemToEdit] = useState('')
  const [onEditMode, setOnEditMode] = useState(false)
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    setFilteredTodos(todos)
  },[todos])

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

  const handleFilter = (e) => {
    const status = e.target.value
    switch (status) {
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.isComplete === true))
        break
      case 'not_started':
        setFilteredTodos(todos.filter(todo => todo.isComplete === false))
        break
      default:
        setFilteredTodos(todos)
    }
  }

  return (
    <>
      <div className='flex justify-center items-center'>
        <div>
          <h1 className='uppercase'>Todo List</h1>
          <select onChange={handleFilter}>
            <option value="all">All</option>
            <option value="not_started">Not started</option>
            <option value="complete">Complete</option>
          </select>
          <ToDoList
            items={filteredTodos}
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
        </div>
    </div>
    </>
  )
}

export default TodoApp
