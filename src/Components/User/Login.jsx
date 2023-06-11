import React from "react"
import { Link } from "react-router-dom"

export default function Login(){
    return(

        <div>
            <form>
            <h3>Login</h3>
            <div>
            <input type="email" placeholder="email" name="email" id="email" required /> <br />
            <input type="password" placeholder="password" id="password" name="password" required /> <br /> <br />
            <button >Sign In</button>
            </div>

            <h6> Don't Have an Account <Link to="/register">Create</Link></h6>

            </form>

        </div>
    )
}