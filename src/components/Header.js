import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex flex-wrap justify-center items-center shadow-lg sm:justify-between sm:px-20">
      <div className="">
        <h1 className=" mx:auto p-4 text-3xl font-[Open Sans] font-bold">
          Cook-Up
        </h1>
      </div>
      <nav className="nav-items">
        <ul className="flex">
          <li className="p-4 ">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-4 hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:text-red-500 text-center">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 hover:text-red-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 hover:text-red-500">
            <Link to="#">Cart</Link>
          </li>
          <li className="p-4 hover:text-red-500">
            <Link
              className="login-btn"
              to="#"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </Link>
          </li>
          {loginBtn === "Logout" && (
            <li className="p-4 text-gray-500">{loggedInUser}</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
