import React from "react";
import "./HotelCard.css";
// import image from "../assets/hotel.jped"

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">

      <div className="image-container">
        <img className="main-image" src={hotel.image1} alt={hotel.name} />
        <div className="image-container2">
          <img className="hotel-image" src={hotel.image2} alt={hotel.name} />
          <img className="hotel-image" src={hotel.image3} alt={hotel.name} />
          <img className="hotel-image" src={hotel.image4} alt={hotel.name} />
        </div>
      </div>

      <div className="hotel-info">
        <h2 className="hotel-name">{hotel.name}</h2>
        <p className="hotel-location">{hotel.location}</p>
        <p className="hotel-description">{hotel.description}</p>
        <div className="hotel-footer">
          <span className="hotel-price">{(hotel.price).toLocaleString("en-IN",{style:"currency",currency:"INR"})} / Night</span>
          <button className="hotel-book-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;