import { FC, useState } from "react"
import { todoInterface } from "../../types/ToDo"
import { useGlobalUser } from "../../context/TodOContext"
import { toDoStatusEnum } from "../../types/enums"
import './ToDo.css'

interface todoProps {
    todo: todoInterface
}

const ToDo:FC<todoProps> = ({todo}) => {
  const [status, setstatus] = useState<toDoStatusEnum>(toDoStatusEnum.newMission)
  const {deleteTask, updateTask} = useGlobalUser()
  const handleDelete = (todo:string)=>{
    deleteTask(todo)
    console.log(todo);
  }
  const handleChangeStatus = (todo:string)=>{
    updateTask(todo)
    setstatus(toDoStatusEnum.missionDone)
  }
  return (
    <div className="ToDo">
      <h5 onClick={()=>{handleChangeStatus(todo.task)}}>{`${todo.status}     ${todo.task}`}</h5>
       <button onClick={()=>{handleDelete(todo.task)}}>Delete Task</button>
    </div>
  )
}

export default ToDo