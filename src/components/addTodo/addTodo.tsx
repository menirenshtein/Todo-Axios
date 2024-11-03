import  {useEffect, useState } from "react"
import { useGlobalUser } from "../../context/TodOContext"
import './addTodo.css'
const AddTodo = () => {
  const [todoInput, setTodoInput] = useState<string>('')
  useEffect(()=>{
  },[todoInput])

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setTodoInput(e.target.value)
  }
  const {addTask} = useGlobalUser()
  return (
    <form className="AddTodo">
        <label >Add todo</label>
        <input type="text" onChange={(e)=>handleChangeInput(e)} />
        <button onClick={()=>addTask(todoInput)}>Add</button>
    </form>
  )
}

export default AddTodo