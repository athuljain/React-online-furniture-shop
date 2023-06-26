import { Link } from "react-router-dom";
import './AdminBody.css'

export default function AdminBody() {
  return (
    <div>
      <div className="Left-Side-Admin">
        <h1 className="Admin-Heading">admin</h1>
        <div className="Left-Side-Admin-details">
          <Link to="/admin/users">Users</Link> <br />
          <Link to="/admin/product">Products</Link>
        </div>
      </div>

      <div className="Admin-Details-page">
        <h1 className="admin-Head">Hello Admin</h1>
        <div className="Admin-details"></div>
      </div>
    </div>
  );
}
