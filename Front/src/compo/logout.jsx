import { replace, useNavigate } from "react-router-dom"

export const LogOutButton = function(){
    
    const navigate = useNavigate()

    const handleLogOut = ()=>{
        localStorage.removeItem("authToken")
        navigate("/login",{replace:true})

    }

    return <button onClick={handleLogOut} >{logoutLogo}</button>
}











const logoutLogo = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
</svg>