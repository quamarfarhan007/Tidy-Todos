import { Link , useNavigate} from "react-router-dom"
import {useState} from "react"
import { BACKEND_URL } from "../config"


export const SignUp = function (){
    const [email,setEmail]=useState("")
    console.log(email)
    const [password,setPassword]=useState("")
    console.log(password)

    const navigate = useNavigate()

    const sendreq = async()=>{
        const packet = {email,password}

        const responce =await fetch(`${BACKEND_URL}/signup`,
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
            body:JSON.stringify(packet)
        })
        console.log(responce)
        if (responce.ok){
            alert("User Created Successfully");
            navigate("/login")
            return 
        }
        const errorData= await responce.json()
        // 2. Check if it's a standard backend message (like "User already exists")
        if (errorData.message) {
            alert(errorData.message);
        } 
        else if (errorData.errors) {
            alert("Invalid input: " + JSON.stringify(errorData.errors));
        
        } 
        // 3. Fallback just in case something totally unexpected happens
        else {
            alert("An unknown error occurred.");
        }
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
            <p>Already a user?</p>

            <Link to="/login">
            <p className="text-blue-900 
            cursor-pointer"   >Log in</p>
            </Link>
        </div>
        
    </div>   
}