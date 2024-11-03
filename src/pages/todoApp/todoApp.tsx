import AddTodo from "../../components/addTodo/addTodo"
import TodoList from "../../components/TodoList/TodoList"
import { useGlobalUser } from "../../context/TodOContext"

const {todoList} = useGlobalUser() 
const todoApp = () => {
  return (
    <div>
      <AddTodo/>
      <TodoList todoList={todoList}/>

    </div>
  )
}

export default todoApp