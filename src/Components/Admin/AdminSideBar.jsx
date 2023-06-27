
import React from "react";

import { ListGroup,ListGroupItem } from "react-bootstrap";
import { Outlet,useNavigate,Link } from "react-router-dom";
import { FiCornerLeftUp } from "react-icons/fi";

const AdminSidebar = () => {
    const navigate = useNavigate();
    return (
      <div className="d-flex bg-secondary">
        <div
          className="bg-secondary text-dark sticky"
          style={{
            width: "200px",
            height: "100vh",
            position: "sticky",
            top: "0",
            borderRight: "2px solid black",
          }}
        >
          <br />
          <div className="d-flex">
            <Link to="/">
              <FiCornerLeftUp  size={"1.2rem"} id="cartIcon" style={{ color: "black",position:'relative',top:'5px' }} />
            </Link>
            <h2 className="ms-2 text-dark">Admin </h2>
          </div>
          <br />
          <ListGroup style={{ border: "0px solid rgb(88, 127, 153)" }}>
            <ListGroupItem
              style={{
                border: "1px solid black",
                borderRadius: "50px",
                color: "black",
              }}
              onClick={() => navigate("/admin/user")}
              className="bg-secondary "
            >
              Users
            </ListGroupItem>
            <ListGroupItem
              style={{
                border: ".5px solid black",
                borderRadius: "50px",
                color: "black",
              }}
              onClick={() => navigate("/admin/products")}
              className="bg-secondary "
            >
              Products
            </ListGroupItem>
            <ListGroupItem
              style={{
                border: "1px solid black",
                borderRadius: "50px",
                color: "black",
              }}
              onClick={() => navigate("/admin/logindata")}
              className="bg-secondary "
            >
              Revenue
            </ListGroupItem>
          </ListGroup>
        </div>
        <Outlet />
      </div>
    );
  };
  export default AdminSidebar;