import { useContext, useRef } from "react"
import UserContext from "../User/UserContext"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const AdminLogin=()=>{
    const {admin,setAdmin,adminAuth,setAdminAuth}=useContext(UserContext)

    const navigate=useNavigate()
    console.log(admin);
    const inputRef=useRef(null)
    const clickHandler=()=>{
        const loginName=inputRef.current.username.value
        const loginPass = inputRef.current.password.value 
    console.log(loginName,loginPass);

    if(loginName==admin.username&&loginPass==admin.password){
    
        navigate('/admin/user')
     
         }else{
             alert('Sorry....!')
         }
      
     }
 
    

    return (
        <div
          className="  d-flex justify-content-center align-items-center bg-dark"
          style={{ maxWidth: "100%", height: "700px" }}
        >
          <form ref={inputRef} onSubmit={(e) => e.preventDefault()}>
            <div
              className=" bg-success d-flex flex-column justify-content-center align-items-center  "
              style={{ border: "1px solid grey", borderRadius: "5px" }}
            >
              <h1 className="mt-3 mb-3 ms-5 me-5">Login</h1>
              <div
                className="mt-3 mb-3 ms-5 me-5"
                style={{ position: "relative", right: "10px" }}
              >
                <label>Username:</label>
                <input type="text" name="username"></input>
              </div>
    
              <div
                className="mt-3 mb-3 ms-5 me-5"
                style={{ position: "relative", right: "8px" }}
              >
                <label>Password:</label>
                <input name="password" type="password"></input>
              </div>
              <div>
                <Button
                  onClick={clickHandler}
                  className="bg-danger mb-4 mt-3"
                  style={{ border: "1px solid grey", borderRadius: "4px" }}
                >
                  Login{" "}
                </Button>
              </div>
            </div>
          </form>
        </div>
      );
}

export default AdminLogin
