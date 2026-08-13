import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  //console.log("header-render");
  const [btnNameReact, setbtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-green-100 shadow-lg mb-4 sm:bg-pink-100 lg:bg-slate-100">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="company logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to={"/grocery"}>Buy Grocerys</Link>
          </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setbtnNameReact("logout")
                : setbtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
