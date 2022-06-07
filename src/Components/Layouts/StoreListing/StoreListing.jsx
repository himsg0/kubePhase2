import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Slider from "react-slick";
import { getHStore } from '../../../Service/Actions/HomeActions';
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './StoreListing.css'

const StoreListing =() =>{
    const SLsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1
      };
    const options ={
        color: "rgba(20,20,20,0.3)",
        activeColor: "#25255c",
        size: window.innerWidth < 600 ? 20 : 35,
        value: 3.5,
        isHalf: true,
        
    };  

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getHStore("Noida"));
   }, [dispatch,]);
  
   const storeData = useSelector(
       (state) => state.storeHReducer.stores
   );

   console.log("Home storeData",storeData);

   

    return(
        <>
        <div className="storeListingSec">
            <h1 className="storeListingHeading">Store Listings</h1>
            <div className="storeListingCardSec">
            <Slider {...SLsettings}>
            <div className="storeListingCard">
                <img className="storeListingImg" src="https://i.ibb.co/tKgp5gn/Artboard-1.png"></img>
                <h2 className="storeListingShopName">Planup Decor</h2>
                <p className="storeListingAddress">Gaur City,Noida</p>
                <div className="storeListingRatingReview">
                    <ReactStars {...options} />
                    <span className="sListingNoOfReviews">(137 Reviews)</span>
                    <button className="storeListingCallNowBtn">
                        <img className="storeListingCallNowImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Group-49.webp"></img>
                    </button>
                </div>
            </div>
            <div className="storeListingCard">
                <img className="storeListingImg" src="https://i.ibb.co/tKgp5gn/Artboard-1.png"></img>
                <h2 className="storeListingShopName">Planup Decor</h2>
                <p className="storeListingAddress">Gaur City,Noida</p>
                <div className="storeListingRatingReview">
                    <ReactStars {...options} />
                    <span className="sListingNoOfReviews">(137 Reviews)</span>
                    <button className="storeListingCallNowBtn">
                        <img className="storeListingCallNowImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Group-49.webp"></img>
                    </button>
                </div>
            </div>
            <div className="storeListingCard">
                <img className="storeListingImg" src="https://i.ibb.co/tKgp5gn/Artboard-1.png"></img>
                <h2 className="storeListingShopName">Planup Decor</h2>
                <p className="storeListingAddress">Gaur City,Noida</p>
                <div className="storeListingRatingReview">
                    <ReactStars {...options} />
                    <span className="sListingNoOfReviews">(137 Reviews)</span>
                    <button className="storeListingCallNowBtn">
                        <img className="storeListingCallNowImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Group-49.webp"></img>
                    </button>
                </div>
            </div>
            <div className="storeListingCard">
                <img className="storeListingImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Planup-Decor1-_1_.webp"></img>
                <h2 className="storeListingShopName">Planup Decor</h2>
                <p className="storeListingAddress">Gaur City,Noida</p>
                <div className="storeListingRatingReview">
                    <ReactStars {...options} />
                    <span className="sListingNoOfReviews">(137 Reviews)</span>
                    <button className="storeListingCallNowBtn">
                        <img className="storeListingCallNowImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Group-49.webp"></img>
                    </button>
                </div>
            </div>
            <div className="storeListingCard">
                <img className="storeListingImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Planup-Decor1-_1_.webp"></img>
                <h2 className="storeListingShopName">Planup Decor</h2>
                <p className="storeListingAddress">Gaur City,Noida</p>
                <div className="storeListingRatingReview">
                    <ReactStars {...options} />
                    <span className="sListingNoOfReviews">(137 Reviews)</span>
                    <button className="storeListingCallNowBtn">
                        <img className="storeListingCallNowImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Group-49.webp"></img>
                    </button>
                </div>
            </div>
            <div className="storeListingCard">
                <img className="storeListingImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Planup-Decor1-_1_.webp"></img>
                <h2 className="storeListingShopName">Planup Decor</h2>
                <p className="storeListingAddress">Gaur City,Noida</p>
                <div className="storeListingRatingReview">
                    <ReactStars {...options} />
                    <span className="sListingNoOfReviews">(137 Reviews)</span>
                    <button className="storeListingCallNowBtn">
                        <img className="storeListingCallNowImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Group-49.webp"></img>
                    </button>
                </div>
            </div>
            <div className="storeListingCard">
                <img className="storeListingImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Planup-Decor1-_1_.webp"></img>
                <h2 className="storeListingShopName">Planup Decor</h2>
                <p className="storeListingAddress">Gaur City,Noida</p>
                <div className="storeListingRatingReview">
                    <ReactStars {...options} />
                    <span className="sListingNoOfReviews">(137 Reviews)</span>
                    <button className="storeListingCallNowBtn">
                        <img className="storeListingCallNowImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Group-49.webp"></img>
                    </button>
                </div>
            </div>
            
            </Slider>
            </div>
            <div className="storeListingViewAllButtonSec"><button className="storeListingViewAllButton">View All</button></div>
        </div>
        </>
    )
}

export default StoreListing;