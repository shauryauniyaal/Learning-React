import Shimmer from "./Shimmer";
import { useNavigate, useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const navigate = useNavigate();
  const { resId } = useParams();

  if (!resId) navigate("/");

  const menuData = useRestaurantMenu(resId);

  if (menuData == null) return <Shimmer />;

  const cardArray = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const itemCards =
    cardArray?.cards[1]?.card?.card?.itemCards ||
    cardArray?.cards[2]?.card?.card?.itemCards;

  const { name } = menuData?.cards[2]?.card?.card?.info;

  return (
    <div className="res-menu">
      <h1 className="res-name">{name}</h1>
      <h2>Menu</h2>
      <h3>Recommended</h3>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item?.card?.info?.id} className="menu-item">
              {item?.card?.info?.name} - Rs.{" "}
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
