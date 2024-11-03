import React from 'react'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/addTodo/addTodo'


const App:React.FC = () => {
  return (
    <div className='app'>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default App