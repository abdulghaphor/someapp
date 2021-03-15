import Home from "../components/Home";
import RestaurantList from "../components/RestaurantList";

const routes = [
  {
    name: "Home",
    exact: true,
    path: "/",
    component: <Home name="Ghaphor" />,
  },
  {
    name: "Restaurants",
    path: "/restaurants",
    component: <RestaurantList />,
  },
];

export default routes;
