import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //console.log("header-render");
  const [btnNameReact, setbtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  //Selector HOOK --->
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-green-100 shadow-lg mb-4 sm:bg-pink-100 lg:bg-slate-100">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="company logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 font-bold text-xl">{data.loggedInUser}</li>
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
          <li className="px-4 font-bold text-xl">
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
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
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
