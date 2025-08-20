import Shimmer from "./Shimmer";
import { useNavigate, useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const navigate = useNavigate();
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  if (!resId) {
    navigate("/");
    return null;
  }

  const menuData = useRestaurantMenu(resId);

  if (menuData == null) return <Shimmer />;

  const cardArray = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const itemCards =
    cardArray?.cards[1]?.card?.card?.itemCards ||
    cardArray?.cards[2]?.card?.card?.itemCards;
  const { name } = menuData?.cards[2]?.card?.card?.info;
  const categories = cardArray.cards.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <div className="text-center">
      <h1 className="font-bold m-5 text-2xl">{name}</h1>
      <h2 className="mb-5">
        {menuData?.cards[2]?.card?.card?.info?.cuisines.join(",")}
      </h2>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              showIndex === index ? setShowIndex(null) : setShowIndex(index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
