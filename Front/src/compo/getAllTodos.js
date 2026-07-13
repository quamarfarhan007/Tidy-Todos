import { BACKEND_URL } from "../config"

export const getTodo =async function(){
    const authToken=localStorage.getItem("authToken")
    try {
        const response = await fetch(`${BACKEND_URL}/allTodos`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization":`Bearer ${authToken}`
            },
        })
        if(response.ok){
            // console.log("i got a successfull response")
            const parsed_response=await response.json()
            // console.log(parsed_response)
            // setAllTodos(parsed_response)

            return (parsed_response)

        }else{console.log(`${BACKEND_URL}/allTodos did not gave response`); return null}
    } catch (error) {
        console.log("network error")
        return null
    }
}