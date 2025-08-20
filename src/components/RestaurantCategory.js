import { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
    
  };

  return (
    <div className=" bg-gray-50 w-1/2 mx-auto my-4 p-4 rounded-lg shadow-xl">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>
      <div>
        {showItems &&
          data.itemCards.map((item) => {
            return <ItemCards i={item} key={item?.card?.info?.id} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantCategory;
