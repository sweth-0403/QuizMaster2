import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">QuizMaster 📚🎓</div>
      <ul className="nav-links">
        <li>
          <Link to="/home" className="nav-button">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-button">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-button">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-button logout">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
