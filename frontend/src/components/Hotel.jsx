import React from "react";
import "./Hotel.css"; // Importing CSS for styling

const Hotel = ({ name, image, price, location, description }) => {
    return (
        <div className="single-hotel-card">
            <img src={image} alt={name} className="single-hotel-image" />
            <div className="single-hotel-details">
                <div className="text">
                    <h2 className="single-hotel-name">{name}</h2>
                    <p className="single-hotel-location">{location}</p>
                    <p className="single-hotel-description">{description}</p>
                </div>
                <div className="book-btn">
                    <p className="single-hotel-price">${price} per night</p>
                    <button className="book-button">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hotel;