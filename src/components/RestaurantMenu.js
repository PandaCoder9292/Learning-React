import React, { useState } from "react";
//import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const location = useLocation();
  const [showIndex, setshowIndex] = useState(null);

  //const [randomMenu, setrandomMenu] = useState([]);

  const randomMenu = useRestaurantMenu(); //<----- Custome HOOK
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
    <div className="menu text-center">
      <h1 className="font-bold my-7 text-3xl">{name}</h1>
      <h2 className="font-bold text-xl my-2">{cuisines.join(", ")}</h2>
      <h3 className="font-bold text-lg my-2">{costForTwo}</h3>
      <h3 className="font-bold text-lg my-2">
        {delivertTime} - Avg. Delivery Time
      </h3>
      <h2>Menu items</h2>
      {/*Categories Accordions*/}
      {randomMenu.map((category, index) => (
        <RestaurantCategory
          key={category.title}
          data={category}
          showItems={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
