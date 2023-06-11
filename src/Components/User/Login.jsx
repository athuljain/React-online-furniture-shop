import React,{useState,useContext} from "react"
import { Link } from "react-router-dom"

import UserContext from "./UserContext"

export default function Login(){

    const {getUserByEmail}=useContext(UserContext)
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const handleButtonClick=()=>{
        const user=getUserByEmail(email)

        if (user&&user.password===password){
            console.log("Login Success");
        }else{
            console.log("login failed");
        }
    }
    return(

        <div>
            <form>
            <h3>Login</h3>
            <div>
            <input type="email" placeholder="email" name="email" id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required /> <br />
            <input type="password" placeholder="password" id="password" name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required /> <br /> <br />
            <button onClick={handleButtonClick} type="button" >Sign In</button>
            </div>

            <h6> Don't Have an Account <Link to="/register">Create</Link></h6>

            </form>

        </div>
    )
}