import React, { useContext } from "react"
import UserContext from "../User/UserContext"
import "./UserAdmin.css"

export default function UserAdmin(){
    const {registeredUsers}= useContext(UserContext)
    return(
        <div>
            <h1>Users</h1>
            <div>
                {registeredUsers.map((user)=>(
                    <div key={user.email}>
                    <p>Name: {user.name}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Email: {user.email}</p>
                  </div>
                )

                )}
            </div>
        </div>
    )
}