import { useEffect, useState } from "react";
import { ALL_MENU_ITEMS } from "../utils/mockMenu";

const useRestaurantMenu = () => {
  const [randomMenu, setrandomMenu] = useState([]);

  useEffect(() => {
    const data = [...ALL_MENU_ITEMS].sort(() => 0.5 - Math.random());
    setrandomMenu(data.slice(0, 15));
  }, []);

  return randomMenu;
};

export default useRestaurantMenu;
