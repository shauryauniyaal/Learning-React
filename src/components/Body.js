import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import useCard from "../utils/useCard";

const Body = () => {
  const {
    ListOfRes,
    filteredRes: [filteredRes, setFilteredRes],
  } = useCard();

  const [searchText, setSearchText] = useState("");

  // Conditional Rendering

  return ListOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          className="search"
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
          className="search-btn"
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
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRes(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container container">
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
