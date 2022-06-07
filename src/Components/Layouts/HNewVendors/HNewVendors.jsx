import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Slider from "react-slick";
import { getHNewStore } from '../../../Service/Actions/HomeActions';
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HNewVendors.css'

const HNewVendors =() =>{
    const NVsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5.25,
        slidesToScroll: 1
      };

      const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getHNewStore());
   }, [dispatch,]);
  
   const storeNewData = useSelector(
       (state) => state.storeHNewReducer.newstores
   );

   console.log("storeNewDatawhy do you",storeNewData);

   const unique = [...new Map(storeNewData?.map((val) => [val['storename'], val])).values() ];
   // unique contains the distinct brand store

   console.log('filteredData',unique)

    return(
        <>
        <div className="hNewVendorsSec">
            <h1 className="hNewVendorsHeading">New Vendors</h1>
            <div className="hNewVendorsCardSec">
            <Slider {...NVsettings}>
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads.webp"></img>
                </div>
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads.webp"></img>
                </div>
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads.webp"></img>
                </div>
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads.webp"></img>
                </div>
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads.webp"></img>
                </div>
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads.webp"></img>
                </div>
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads.webp"></img>
                </div>
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads.webp"></img>
                </div>
                <div className="hNewVendorsImgSec">
                <img className="hNewVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads.webp"></img>
                </div>
            </Slider>
            </div>
        </div>
        </>
    )
}

export default HNewVendors;