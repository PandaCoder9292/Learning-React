import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfReastaurants, setlistOfReastaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");
  //console.log("Body re-render", listOfReastaurants);

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    //console.log(json); //WE NEED THIS Don't ERASE IT
    setlistOfReastaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const onlineState = useOnlineStatus();

  const { loggedInUser, setuserName } = useContext(UserContext);

  if (onlineState === false) {
    return (
      <h1>
        Looks like your Internet is Not working, Check you internet connection
      </h1>
    );
  }

  return listOfReastaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-2 border-solid border-blue-400 focus-ring-2"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className=" px-4 py-2 bg-slate-200 m-4 rounded-lg"
            onClick={() => {
              //Filter my res cards and display in UI
              const filteredRestaurant = listOfReastaurants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <button
            className="filter-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfReastaurants.filter(
                (res) => res.info.avgRating >= 4.5,
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <label className="font-medium">User Name : </label>
          <input
            className="border border-black border-solid border-2 px-2"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            state={{
              name: restaurant.info.name,
              cuisines: restaurant.info.cuisines,
              costForTwo: restaurant.info.costForTwo,
              deliveryTime: restaurant.info.sla?.slaString,
            }}
          >
            {restaurant.info.avgRating >= 4.6 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
