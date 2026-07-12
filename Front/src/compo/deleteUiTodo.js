// import { useContext } from "react"
// import { RefreshContext } from "./refreshContext"

// export const deleteUiTodo =async function(todoId,{triggerRefresh}){
export const deleteUiTodo =async function(todoId,triggerRefresh){
    const authToken=localStorage.getItem("authToken")

    // const {triggerRefresh}=useContext(RefreshContext)

    try {
        // const response = await fetch("http://localhost:3000/deleteTodo",{
        const response = await fetch("https://tidy-todos.onrender.com/deleteTodo",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization":`Bearer ${authToken}`
            },
            body:JSON.stringify({
                todoId:todoId
            })
        })
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || "could not delete todo")
        }
        triggerRefresh()
        return data
    } catch (error) {
        console.error("can not send the request to backend deleteTodo", error)
        throw error
    }


}