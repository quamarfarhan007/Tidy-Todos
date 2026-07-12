export const getTodo =async function(){
    const authToken=localStorage.getItem("authToken")
    try {
        // const response = await fetch("http://localhost:3000/allTodos",{
        const response = await fetch("https://tidy-todos.onrender.com/allTodos",{
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
        // }else{console.log("http://localhost:3000/allTodos did not gave response"); return null}
        }else{console.log("https://tidy-todos.onrender.com/allTodos did not gave response"); return null}
    } catch (error) {
        console.log("network error")
        return null
    }
}