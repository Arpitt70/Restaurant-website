import { useEffect, useState } from "react";
// import { restaurantList } from "./Constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
  restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // console.log(filteredRestaurants);
  //Empty dependency array [] runs once after render 
  useEffect(()=>{
    getRestaurants()
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4844823&lng=77.2907049&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }
  // console.log("render");
 if (!filteredRestaurants) return null;
  return filteredRestaurants.length===0 ? <Shimmer/> :(
    <>
      <div className="serach-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-bar"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restuarent) => {
          return (
            <RestaurantCard {...restuarent.data} key={restuarent.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
