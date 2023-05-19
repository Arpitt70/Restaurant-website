import { IMG_CDN_URL } from "./Constant";

const RestaurantCard = ({name, cuisines, rating, cloudinaryImageId}) => {
    // console.log(rating, cuisines, name);
    return (
      <div className="card">
       <img src={IMG_CDN_URL + cloudinaryImageId} alt="burger-king" />   
           <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3> 
          <h4>{rating} stars</h4> 
      </div>
  )}
  export default RestaurantCard;