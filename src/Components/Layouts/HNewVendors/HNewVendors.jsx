import React from "react";
import Slider from "react-slick";
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