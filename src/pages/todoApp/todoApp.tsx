import AddTodo from "../../components/addTodo/addTodo"
import TodoList from "../../components/TodoList/TodoList"
import './todoApp.css'

const TodoApp = () => {
  return (
    <div className="TodoApp" >
      <AddTodo/>
      <TodoList />

    </div>
  )
}

export default TodoApp