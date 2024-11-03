
import ToDo from "../ToDo/ToDo";
import { useGlobalUser } from "../../context/TodOContext";


const TodoList = () => { 
  const {todoList} = useGlobalUser()
  return (
    <div className="todo-list">
      {todoList.map((t)=>{
        return <ToDo todo={t}/>
      })}
    </div>
  );
};

export default TodoList;
