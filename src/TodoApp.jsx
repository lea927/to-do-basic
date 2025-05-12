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
  const [showModal, setShowModal] = useState(false);

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
      <div className='flex justify-center items-center h-screen'>
        <div className='w-4/5'>
          <h1 className='uppercase text-6xl font-bold text-center'>Todo List</h1>
          <div className='flex justify-between'>
            <button
              onClick={() => setShowModal(true)}
              className='text-2xl font-medium text-white bg-blue-600 hover: cursor-pointer py-4 px-8 rounded-md' 
            >
              Add Task
            </button>
            <select className='text-2xl font-medium py-4 px-8 rounded-md bg-gray-200' onChange={handleFilter}>
              <option value="all">All</option>
              <option value="not_started">Not started</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          { filteredTodos.length === 0 ? (
            <p className='text-center text-2xl'>No items found 🫡</p>
          ) : (
            <ToDoList
              items={filteredTodos}
              onBoxClick={handleCheckboxClick}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onEditToggle={handleMode}
            />
          )}
          <ToDoForm
            show={showModal}
            onClose={() => setShowModal(false)}
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
