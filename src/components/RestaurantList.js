import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = () => {
  const [data, setData] = useState([]);
  const dataUrl =
    "https://random-data-api.com/api/restaurant/random_restaurant?size=1";

  useEffect(() => {
    axios.get(dataUrl).then((response) => setData(response.data));
  }, []);

  return (
    <div>
      {data.map((cv) => (
        <RestaurantItem item={cv} />
      ))}
    </div>
  );
};
export default RestaurantList;
