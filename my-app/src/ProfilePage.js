import React from "react";
import "./ProfilePage.css"; // Create and import your CSS styles as needed
import { FaStar, FaRegStar, FaPhone, FaHeart } from "react-icons/fa";
import { useState } from 'react';
import CheckoutPage from './CheckoutPage';
import Heart from "react-animated-heart";


const ProfilePage = ({ walker, formData, dogWalkerData}) => {
  // Structure your profile page here using the walker details
  const reviews = walker.reviews || [];

  const [showCheckout, setCheckOut] = useState(false);
  const [isClick, setClick] = useState(walker.favorite);
  const [finalDogWalkerData,setDogWalkerData] = useState(dogWalkerData);

  const toggleFavorite = () => {
    const updatedData = dogWalkerData.map(w => {
      if (w.id === walker.id) {
        return {...w, favorite: !isClick};  
      }
      return w;
    });
    setDogWalkerData(updatedData);
    setClick(!isClick);
  }

  const goToCheckOut = () => {
    setCheckOut(true);
  }

  return (
    <>
      {showCheckout ? null : (
        <div class="profile-container">
          <div className="profile-header">
            <div className="profile-left">
              <img
                src={walker.imageUrl}
                alt={walker.name}
                className="profile-image"
              />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{walker.name}</h1>
              <p className="profile-location">{walker.location.city}</p>
              <div className="profile-rating">
                ★★★★★ ({walker.reviews.length})
                <span className="response-rate">Response Rate: 98%</span>
              </div>
              <button
                onClick={goToCheckOut}
                className="contact-button"
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                Book
              </button>
              <div className="favorite-icon">
                <Heart isClick={isClick} onClick={toggleFavorite} />
              </div>
            </div>
          </div>

          <div class="profile-section">
            <div class="profile-services">
              <h2>Services</h2>
              {walker.offeredServices.map((service, index) => (
                <p key={index}>
                  {service.service_name}{" "}
                  <span className="pricing">: ${service.price} per visit</span>
                </p>
              ))}
            </div>
            <div class="profile-availability">
              <h2>Availability</h2>
              <p>Days : {walker.availabilty[0].days}</p>
              <p>Time : {walker.availabilty[0].Time}</p>
            </div>
          </div>

          <div class="profile-reviews">
            <h2>Reviews</h2>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="review">
                  <p className="review-author">{review.customerName}</p>
                  <p className="review-date">{review.date}</p>
                  <p className="review-content">{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
        </div>
      )}
      {showCheckout && <CheckoutPage formData={formData} walker={walker} finalDogWalkerData={finalDogWalkerData}/>}
    </>
  );
};

export default ProfilePage;
