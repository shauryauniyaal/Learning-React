import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    id: resID,
  } = resData?.info;

  const { slaString } = resData?.info?.sla;

  let rating = null;

  if (avgRating < 3) {
    rating = "bg-red-300";
  } else if (avgRating > 3 && avgRating < 4) {
    rating = "bg-yellow-300";
  } else {
    rating = "bg-green-400";
  }

  return (
    <div className="m-5 w-[250px] h-[] bg-gray-200/65 p-4 rounded-lg position-relative text-center font-roboto shadow-lg hover:shadow-[0_5px_10px_10px_rgba(48,48,48,0.303)] hover:transition-all duration-200 ease-in  hover:scale-105 transform-gpu ">
      <div>
        <img
          className="rounded-lg object-cover align-middle w-[250px] h-[150px]"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <h3 className="font-bold overflow-hidden whitespace-nowrap overflow-ellipsis text-xl p-2">
        {name}
      </h3>
      <h4 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
        {cuisines.join(", ")}
      </h4>
      <h4 className="card-desc">{costForTwo}</h4>
      <h4
        className={`h-fit w-fit m-auto text-white p-1 rounded-sm text-bold ${rating}`}
      >
        {avgRating.toFixed(1)}
      </h4>
      <h4 className="card-desc">{slaString}</h4>
    </div>
  );
};

export const openLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg hover:transition-all duration-200 ease-in  hover:scale-105 transform-gpu">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
