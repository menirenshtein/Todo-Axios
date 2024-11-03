import {createContext, FC, useContext, useEffect, useState,} from "react";
import { todoInterface } from "../types/ToDo";

interface toDoProviderProps {
  children: React.ReactNode;
}
  
interface ContextProps {todoList: todoInterface[], addTask: ()=> void; updateTask: ()=> void;  deleteTask: ()=> void;}

const GET_DATA_FROM_LOCAL_STORAGE = async ():Promise<todoInterface[] | []> =>{
  const data:string = await localStorage.getItem('toDoList') || ''
  return await JSON.parse(data)
}

const toDoContext = createContext<ContextProps>({
  todoList: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});
  
const toDoProvider: FC<toDoProviderProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<todoInterface[] | []>([])
    
  useEffect( ()=>{
    GET_DATA_FROM_LOCAL_STORAGE().then(
      (data)=>{
        setTodoList(data)
        console.log(todoList);
      }
    )
  },[])

  const addTask = ()=>{}
  const deleteTask = ()=>{}
  const updateTask = ()=>{}

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

export { toDoContext, toDoProvider };