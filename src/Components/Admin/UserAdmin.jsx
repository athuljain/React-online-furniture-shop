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
                    <p className="user-p">Name: {user.name}</p>
                    <p className="user-p">Phone: {user.phone}</p>
                    <p className="user-p">Email: {user.email}</p>
                  </div>
                )

                )}
            </div>
        </div>
    )
}