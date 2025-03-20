import { RESLIST_URL } from "./constants";
import { useState, useEffect } from "react";

const useCard = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESLIST_URL);
    const json = await data.json();
    setListOfRes(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return {
    ListOfRes,
    filteredRes: [filteredRes, setFilteredRes],
  };
};

export default useCard;
