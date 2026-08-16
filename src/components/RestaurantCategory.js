import { useState } from "react";
import ItemList from "./ItemList";

//
const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    // console.log("Clicked");
    setshowIndex();
  };

  return (
    <div>
      {/*Hearder*/}
      <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 p-4 rounded-lg">
        <div
          className="flex justify-between cursor-pointer pb-2"
          onClick={handleClick}
        >
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⏬</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
