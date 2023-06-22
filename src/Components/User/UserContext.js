import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const addUser = (userData) => {
    setRegisteredUsers([...registeredUsers, userData]);
  };

  
  const getUserByEmail = (email) => {
    return registeredUsers.find((user) => user.email === email);
  };

  const [loginStatus,setLoginStatus] = useState("")

  const value = {
    addUser,
    getUserByEmail,
    loginStatus,
    setLoginStatus,
  };

 

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export default UserContext;
