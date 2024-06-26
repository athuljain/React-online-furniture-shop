import React, { useState, useContext, useRef, useEffect,  } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import './UserRegister.css'

export default function UserRegister() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const inputRef = useRef(null);

  const {addUser,}=useContext(UserContext)

  // useEffect(()=>{
  //     inputRef.current.focus()
  // })
 
  const navigate = useNavigate();
  

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonClick = () => {
    const userData = {
      name,
      phone,
      email,
      password,
    };
    addUser(userData);
   // setLoginStatus('success')
    navigate("/login");
    console.log(userData);
  };

  return (
    <div className="register-container">
      <h3 className="register-header">Register</h3>
      <div className="register-body">
        <input
          className="register-input"
          type="text"
          ref={inputRef}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="register-input"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          className="register-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="submit-btn" onClick={handleButtonClick} type="submit">
          Submit 
        </button>
      </div>
    </div>
  );
}
