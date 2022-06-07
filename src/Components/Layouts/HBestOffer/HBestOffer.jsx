import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Slider from "react-slick";
import { getOffer } from '../../../Service/Actions/HomeActions';
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HBestOffer.css'

const HBestOffer =() =>{
    const BOsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2,
        slidesToScroll: 1
      };

      const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getOffer("Noida"));
   }, [dispatch,]);
  
   const offerData = useSelector(
       (state) => state.offerReducer.offers
   );

   console.log("OfferData",offerData);

    return(
        <>
        <div className="hBestOfferSec">
            <h1 className="hBestOfferHeading">Best Offers</h1>
            <div className="hBestOfferCardSec">
            <Slider {...BOsettings}>
                <div className="hBestOfferImgSec">
                <img className="hBestOfferImg" src="https://www.kubeshop.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-26-at-1.45.22-PM.webp"></img>
                </div>
                <div className="hBestOfferImgSec">
                <img className="hBestOfferImg" src="https://www.kubeshop.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-26-at-1.45.22-PM.webp"></img>
                </div>
                <div className="hBestOfferImgSec">
                <img className="hBestOfferImg" src="https://www.kubeshop.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-26-at-1.45.22-PM.webp"></img>
                </div>
            </Slider>
            </div>
            <div className="hBestOfferViewAllButtonSec"><button className="hBestOfferViewAllButton">View All</button></div>
        </div>
        </>
    )
}

export default HBestOffer;