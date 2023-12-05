import Brand from "./assets/icons/business_logo.PNG";
// import { NavLink } from 'react-router-dom'
import { FaHome, FaBell, FaUser} from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={Brand} alt="App Logo" />
      </div>
      <div className="company-name">Easy Care</div>
      <div>
        <ul>
          <li>
            <a href="/EasyCare">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="/home">
              <FaUser /> User Setting
            </a>
          </li>
          <li>
            <a href="/notification">
              <FaBell /> Notification{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
