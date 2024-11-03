import {createContext, FC, useContext, useEffect, useState,} from "react";
import { todoInterface } from "../types/ToDo";
import { toDoStatusEnum } from "../types/enums";

interface ToDoProviderProps {
  children: React.ReactNode;
}
  
interface ContextProps {
  todoList: todoInterface[],
   addTask: (todo: string)=> void;
   updateTask: (todo: string)=> void;
   deleteTask: (todo: string)=> void;}

 const GET_DATA_FROM_LOCAL_STORAGE = (): todoInterface[] => {
  const data = localStorage.getItem('toDoList');
  return data ? JSON.parse(data) : [];
};

const toDoContext = createContext<ContextProps>({
  todoList: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});
  
const ToDoProvider: FC<ToDoProviderProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<todoInterface[] | []>([])
  const [status, setstatus] = useState<toDoStatusEnum>(toDoStatusEnum.newMission)
    
  useEffect(() => {
    const data = GET_DATA_FROM_LOCAL_STORAGE();
    console.log(data);
    setTodoList(data);
  }, []);

  const addTask = (todo: string)=>{
    let tempList: todoInterface[] = todoList
    const newToDo: todoInterface = {
      task: todo , 
      status: toDoStatusEnum.newMission
    }
    tempList.push(newToDo)
    setTodoList(tempList)
    localStorage.setItem('toDoList', JSON.stringify(tempList))
  }
  const deleteTask = (todo: string)=>{
    let tempList: todoInterface[] = [...todoList]
    const updatedList:todoInterface[] = tempList.filter((t)=>t.task !== todo)
    setTodoList(updatedList)
    localStorage.setItem('toDoList', JSON.stringify(updatedList))
  }
  const updateTask = (todo: string)=>{
    let tempList: todoInterface[] = todoList
    const foundTodo = tempList.find((t)=>t.task === todo)
    foundTodo!.status === toDoStatusEnum.missionDone ?
    foundTodo!.status = toDoStatusEnum.newMission
    : foundTodo!.status = toDoStatusEnum.missionDone 
    setstatus(foundTodo!.status)
    localStorage.setItem('toDoList', JSON.stringify(tempList))
  }

  return (
    <toDoContext.Provider
      value={{
        todoList,
        addTask,
        deleteTask,
        updateTask
        
      }}
    >
      {children}
    </toDoContext.Provider>
  );
};
  
export const useGlobalUser = () => {
  return useContext(toDoContext);
};

export { toDoContext, ToDoProvider };