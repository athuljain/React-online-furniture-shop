import React,{useState,useContext, useRef, useEffect} from "react"
import { Link  } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import UserContext from "./UserContext"

export default function Login(){
    const inputRef=useRef(null)

    // useEffect(()=>{
    //     inputRef.current.focus()
    // })

    const navigate=useNavigate()

    const {getUserByEmail}=useContext(UserContext)
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [loginStatus, setLoginStatus] = useState("");

    console.log(email);
    console.log(password);

    
    const handleButtonClick=()=>{
        const user=getUserByEmail(email)
        console.log(user);

        if (user && user.password===password){

            navigate('/')
            setLoginStatus('success')
            console.log("Login Success");
        }else{
            setLoginStatus('failure')
            console.log("login failed");
        }
    }
    return(

        <div>
            <form>
            <h3>Login</h3>
            <div>
            <input ref={inputRef} type="email" placeholder="email" name="email" id="email"
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
            {loginStatus === "success" && <p style={{"color":"black"}}>Login successful!</p>}
            {loginStatus === "failure" && <p style={{"color":"black"}}>Login failed. Please try again.</p>}
        </div>
    )
}