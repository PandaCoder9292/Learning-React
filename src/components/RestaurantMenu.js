import React from "react";
//import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const location = useLocation();

  //const [randomMenu, setrandomMenu] = useState([]);

  const randomMenu = useRestaurantMenu();
  // useEffect(() => {
  //   const data = [...ALL_MENU_ITEMS].sort(() => 0.5 - Math.random());
  //   setrandomMenu(data.slice(0, 15));
  // }, [resId]);

  const {
    name = "Restaurant Name",
    cuisines = ["Variety"],
    costForTwo = "₹ 300 For Two",
    delivertTime = "30 min.",
  } = location.state;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwo}</h3>
      <h3>{delivertTime} - Avg. Delivery Time</h3>
      <h2>Menu ({randomMenu.length} items)</h2>
      <ul>
        {randomMenu.map((item) => (
          <li key={item.id}>
            {item.name} - {" Rs."} {item.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
