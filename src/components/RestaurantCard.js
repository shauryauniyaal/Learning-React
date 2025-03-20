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
    rating = "rating-low";
  } else if (avgRating > 3 && avgRating < 4) {
    rating = "rating-med";
  } else {
    rating = "rating-high";
  }

  return (
    <div className="res-card card">
      <div className="i-container">
        <img
          className="res-img img-container"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <h3>{name}</h3>
      <h4 className="card-desc cuisines">{cuisines.join(", ")}</h4>
      <h4 className="card-desc">{costForTwo}</h4>
      <h4 className={`card desc  rating ${rating}`}>{avgRating.toFixed(1)}</h4>
      <h4 className="card-desc">{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
