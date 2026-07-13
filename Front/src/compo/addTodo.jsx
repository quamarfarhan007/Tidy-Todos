import { useContext } from "react"
import { useState } from "react"
import { RefreshContext } from "./refreshContext"
import { BACKEND_URL } from "../config"
export const Add = function ({inactivateAddButton}) {

    const {triggerRefresh} = useContext(RefreshContext)

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const addTodo =async function(title,description){
    const authToken=localStorage.getItem("authToken")
    try {
        const response = await fetch(`${BACKEND_URL}/addTodo`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization":`Bearer ${authToken}`
            },
            body:JSON.stringify({
                title:title,
                description:description
            })
        })
        if(response.ok){
            console.log("added succesfully")
            inactivateAddButton()
            triggerRefresh()

        }else{console.log("todo did not get added")}
    } catch (error) {
        console.log("network error")
    }
}


    return <div className="flex flex-col justify-around items-center w-[400px] h-[200px] bg-blue-200 rounded-xl shadow-xl">
        <div className="flex">
            <label className="w-24">Title</label>
            <input
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
             type="text" />
        </div>

        <div className="flex">
            <label className="w-24">Description</label>
            <input
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
            type="text" />
        </div>
        <div className="flex justify-around">
            <button className="bg-green-400 rounded-xl px-5"
                onClick={()=>addTodo(title,description)}>
                ADD
            </button>
            <button
                onClick={inactivateAddButton}
                className="bg-red-400 rounded-xl px-4 cursor-pointer">Cancel</button>
        </div>

    </div>
}