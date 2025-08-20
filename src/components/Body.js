import { useContext, useState } from "react";
import RestaurantCard, { openLabel } from "./RestaurantCard";
import { Link } from "react-router";

import Shimmer from "./Shimmer";
import useCard from "../utils/useCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {
    ListOfRes,
    filteredRes: [filteredRes, setFilteredRes],
  } = useCard();

  const [searchText, setSearchText] = useState("");

  // Conditional Rendering

  const OpenRestaurant = openLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  return ListOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mb-2">
      <div className="flex ">
        <div className="py-4">
          <input
            className="border-1 rounded-sm ml-10 mr-4 my-4"
            value={searchText}
            onChange={(e) => {
              if (e.target.value === "") {
                const filteredList = ListOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(e.target.value)
                );
                setFilteredRes(filteredList);
              }
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              console.log(e.key);
              if (e.key == "Enter") {
                const filteredList = ListOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRes(filteredList);
              }
            }}
          ></input>
          <button
            className="m-4 px-4 py-1 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300/75"
            onClick={() => {
              const filteredList = ListOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredList);
            }}
          >
            Search
          </button>

          <button
            className="bg-red-500 px-4 py-1 rounded-md text-white cursor-pointer hover:bg-red-600 "
            onClick={() => {
              const filteredList = ListOfRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRes(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="mx-5 py-4">
          <label>Set Username: </label>
          <input
            className="border-1 rounded-sm mr-4 my-4 border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap max-w-7xl justify-center m-auto">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {filteredRes.length == 0 ? (
          <h1 className="error-msg">
            Sorry! We don't have what you want at the moment.
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default Body;
