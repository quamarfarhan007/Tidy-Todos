import { Link , useNavigate} from "react-router-dom"
import {useRef,useState} from "react"
import { BACKEND_URL } from "../config"


export const Login = function (){
    const [email,setEmail]=useState("")
    console.log(email)
    const [password,setPassword]=useState("")
    console.log(password)

    const navigate = useNavigate()

    const sendreq = async()=>{
        const packet = {email,password}
        const response =await fetch(`${BACKEND_URL}/login`,
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
            body:JSON.stringify(packet)
        })

        const data=await response.json()
        if (response.ok){
            console.log(data)
            localStorage.setItem("authToken", data.token)
            navigate("/home")
        }else {
            alert("incorrect email or password")}
    }


    return <div className="flex justify-center items-center bg-[#2B5748] h-screen ">
        <div className="flex flex-col  items-center w-60 h-[400px] rounded-xl shadow-xl shadow-black bg-red-100 " >
            <Link to="/">
            <p className="text-3xl pt-2 pb-[90px] font-serif ">Tidy-Todos </p>
            </Link>

            <input 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="text"
            className="rounded-xl pl-2 shadow-md hover:shadow-red-300" 
            placeholder="email" />

            <br />

            <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="text"
            className="rounded-xl pl-2 shadow-md hover:shadow-red-300"
            placeholder="paswword" />
            
            <br />

            <button onClick={sendreq} className="bg-blue-400 rounded-xl px-4 py-1 shadow-xl hover:shadow-blue-300"   >Log in</button>
            <br />
            <p onClick={sendreq} className=""   >Don't have an account?</p>

            <Link to="/signup">
            <p className="text-blue-900 
            cursor-pointer"   >Sign Up</p>
            </Link>
        </div>
        
    </div>   
}