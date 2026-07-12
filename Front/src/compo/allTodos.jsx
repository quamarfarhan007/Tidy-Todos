import { useEffect, useRef, useState } from "react"
import { getTodo } from "./getAllTodos"
import { deleteUiTodo } from "./deleteUiTodo"
import { useContext } from "react"
import { RefreshContext } from "./refreshContext"



export const AllTodos = function () {
    const [allTodos,setAllTodos] = useState([])

    const checklistRef= useRef([])
    const {refreshTrigger,triggerRefresh} = useContext(RefreshContext)
    useEffect(()=>{
        (async()=>{
            const data=await getTodo()
        setAllTodos(prev=>[...data])}
        )()
    },[refreshTrigger])

    // console.log(allTodos)
    return <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 m-2">
        {allTodos.map((value,index)=>(<SuballTodosUI
            key={value._id}
            title={value.title}
            description={value.description}
            todoId={value._id}
            triggerRefresh={triggerRefresh}
            />))}
    </div>
}

function SuballTodosUI({title,description,todoId,triggerRefresh}){
    return <div className="relative flex flex-col items-center h-full w-full bg-[#FFBF00] rounded-xl px-2 py-2 pb-8 break-all">
        <input type="checkbox"
        className="absolute bottom-2 left-2 w-5 h-5 cursor-pointer accent-green-400"
        onChange={()=>{deleteUiTodo(todoId,triggerRefresh)}} />
        <div className="font-semibold">{title}</div>

        {description}
    </div>
}