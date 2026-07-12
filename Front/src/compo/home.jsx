import { useState } from "react"
import { Add } from "./addTodo"
import { AllTodos } from "./allTodos"
import { LogOutButton } from "./logout"
import { createContext } from "react"
import { RefreshProvider } from "./refreshContext"
// import { allTodos } from "../../../Back/Routers/addTodo"
 
// const RefreshContext = createContext()
// function  RefreshProvider ({children}){
//     const [refreshTrigger,setRefreshTrigger] = useState(false)
// }

export const Home = function () {
    // const [refreshTrigger,setRefreshTrigger] = useState(false)

    const [addButton, setAddButton] = useState(false)
    
    // const triggerRefresh = function(){
    //     setRefreshTrigger(pre=>!pre)
    // }

    const activateAddButton = () => {
        setAddButton(true)
    }
    const inactivateAddButton = () => {
        setAddButton(false)
    }


    
    
    return <RefreshProvider>
    <div className="bg-red-200 min-h-screen w-screen">
        <div className="flex justify-between py-4 px-4">
            <p>Welcome to the todos</p>
            <LogOutButton/>

        </div>
        <AllTodos></AllTodos>

        <div className="flex justify-center py-3">
            {(addButton) ?
             < Add inactivateAddButton={inactivateAddButton}/> 
             : <button className="bg-blue-600 rounded-xl px-1 shadow-xl" onClick={activateAddButton}>Add Todo</button>}
        </div>
    </div>
             </RefreshProvider>
}