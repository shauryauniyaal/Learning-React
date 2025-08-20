import { CDN_URL } from "../utils/constants";

const ItemCards = ({ i }) => {
  return (
    <div className="text-left p-4 border-b-2 border-gray-300 h-max-container flex gap-4 ">
      <div className="w-9/12">
        <div className="text-md">{i?.card?.info?.name}</div>
        <div className="text-sm">
          ₹
          {i?.card?.info?.defaultPrice
            ? i?.card?.info?.defaultPrice / 100
            : i?.card?.info?.price / 100}
        </div>
        <div className="text-gray-600 text-xs pr-4 pb-4">
          {i?.card?.info?.description}
        </div>
      </div>
      <div className="w-3/12 relative">
        <img
          src={CDN_URL + i?.card?.info?.imageId}
          className="rounded-xl w-full"
        />

        <button className="absolute bottom-2 left-1/2 font-semibold shadow-lg transform -translate-x-1/2 rounded-lg border p-1 bg-white text-green-600 border-gray-300 cursor-pointer hover:bg-gray-200">
          ADD +
        </button>
      </div>
    </div>
  );
};

export default ItemCards;
