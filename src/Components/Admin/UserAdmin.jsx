// import { useContext, useEffect, useRef } from "react";
// import UserContext from "../User/UserContext";
// import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
// import { FaSearchengin } from "react-icons/fa";


// const UserAdmin=()=>{
//     const {
//         login,
//         search,
//         setSearch,
//         setLogin,
//         auth,
//         setAuth,
//         filtered,
//         setFiltered,
//       } = useContext(UserContext)
//       const inputRef = useRef();

//       useEffect(()=>{
//         const newData=login.filter((item)=> item.name === search)

//         if(newData.length >0){
//             setFiltered(newData);
//             setAuth(true)
//         }else if(login !== search&&search !==''){
//             setFiltered([])
//         }else{
//             setAuth(false)
//         }

//       },[search])

//       const SearchHandler = () => {
//         const searchHere = inputRef.current.value;
//         setSearch(searchHere);
//       };

//     return (
//         <div className="bg-secondary" style={{ width: "100%" }}>
//           <h3
//             className="mt-3"
//             style={{ textAlign: "center", textDecoration: "underline " }}
//           >
//             Users
//           </h3>
//           <br />
//           <input
//             ref={inputRef}
          
//             onChange={SearchHandler}
//             type="text"
//             className="ms-2  p-2"
//             placeholder="Search user here"
//             style={{ width: "90%", border: "1px solid black", borderRadius: "5px" }}
//             required  
//           />{" "}
//           <Button variant="success" onClick={SearchHandler}>
//             Search
//           </Button>
//           <div>
//             <br />
//             {auth
//               ? filtered.map((item, index) => {
//                   return (
//                     <div key={index}>
//                       <ListGroup>
//                         <div>
//                           <ListGroupItem>
//                             Name: {item.name} <br /> Email: {item.email}{" "}
//                           </ListGroupItem>
//                         </div>
//                       </ListGroup>
//                     </div>
//                   );
//                 })
//               : auth == null
//               ? null
//               : login.map((item, index) => {
//                   return (
//                     <div key={index}>
//                       <ListGroup>
//                         <div>
//                           <ListGroupItem>
//                             Name: {item.name} <br /> Email: {item.email}
//                           </ListGroupItem>
//                         </div>
//                       </ListGroup>
//                     </div>
//                   );
//                 })}
//           </div>
//         </div>
//       );
//     };
    
//     export default UserAdmin;
