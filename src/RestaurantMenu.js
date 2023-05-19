import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./Constant";

// how to read dynamic URL - params

const RestaurantMenu = () => {
    // const params = useParams();
    // const {id} = params; or we can directly do object destructuring like
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState({})

    useEffect(() => {
    getRestaurantInfo();
    }, [])
    
    async function getRestaurantInfo(){
      const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4844823&lng=77.2907049&restaurantId=543889")
      const json = await data.json();   
      console.log(json.data);
      let newData = json.data.cards[0].card.card.info;
      console.log(newData);
      console.log(json);
      console.log(json.data.cards[2].groupedCard);
      setRestaurant(newData)
    
    }

    return (
      <>
    <div>RestaurantMenu id: {id}</div>
    <img src = {IMG_CDN_URL + restaurant.cloudinaryImageId}/>
    <h2>{restaurant.areaName}</h2>
    <h2>{restaurant.city}</h2>
    <h2>Cost for two :- {restaurant.costForTwo}</h2>
    <h2>{restaurant.locality}</h2>
    <h2>{restaurant.areaName}</h2>
    <div>{console.log(restaurant.menu)}</div>
    </>
    )
}

export default RestaurantMenu