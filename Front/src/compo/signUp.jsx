import { Link , useNavigate} from "react-router-dom"
import {useRef,useState} from "react"


export const SignUp = function (){
    const [email,setEmail]=useState("")
    console.log(email)
    const [password,setPassword]=useState("")
    console.log(password)

    const navigate = useNavigate()

    const sendreq = async()=>{
        const packet = {email,password}
        // const responce =await fetch("http://localhost:3000/signup",
        const responce =await fetch("https://tidy-todos.onrender.com/signup",
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
            body:JSON.stringify(packet)
        })
        console.log(responce)
        if (responce.ok){
            navigate("/login")
        }else {
            const errorData= await responce.json()
            alert(JSON.stringify(errorData.errors))}
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

            <button onClick={sendreq} className="bg-blue-400 rounded-xl px-4 py-1 shadow-xl hover:shadow-blue-300"   >Sign UP</button>
            <br />
            <p onClick={sendreq} className=""   >Already a user?</p>

            <Link to="/login">
            <p className="text-blue-900 
            cursor-pointer"   >Log in</p>
            </Link>
        </div>
        
    </div>   
}