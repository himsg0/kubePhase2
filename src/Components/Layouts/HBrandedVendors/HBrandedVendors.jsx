import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HBrandedVendors.css'

const HBrandedVendors =() =>{
    const NVsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1
      };

    return(
        <>
        <div className="hBrandedVendorsSec">
            <h1 className="hBrandedVendorsHeading">New Vendors</h1>
            <div className="hBrandedVendorsCardSec">
            <Slider {...NVsettings}>
                <div className="hBrandedVendorsImgSec">
                <img className="hBrandedVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/2nd-Feb-02-Copy.webp"></img>
                </div>
                <div className="hBrandedVendorsImgSec">
                <img className="hBrandedVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/2nd-Feb-02-Copy.webp"></img>
                </div>
                <div className="hBrandedVendorsImgSec">
                <img className="hBrandedVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/2nd-Feb-02-Copy.webp"></img>
                </div>
                <div className="hBrandedVendorsImgSec">
                <img className="hBrandedVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/2nd-Feb-02-Copy.webp"></img>
                </div>
                <div className="hBrandedVendorsImgSec">
                <img className="hBrandedVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/2nd-Feb-02-Copy.webp"></img>
                </div>
                <div className="hBrandedVendorsImgSec">
                <img className="hBrandedVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/2nd-Feb-02-Copy.webp"></img>
                </div>
                <div className="hBrandedVendorsImgSec">
                <img className="hBrandedVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/2nd-Feb-02-Copy.webp"></img>
                </div>
                <div className="hBrandedVendorsImgSec">
                <img className="hBrandedVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/2nd-Feb-02-Copy.webp"></img>
                </div>
                <div className="hBrandedVendorsImgSec">
                <img className="hBrandedVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/2nd-Feb-02-Copy.webp"></img>
                </div>
            </Slider>
            </div>
        </div>
        </>
    )
}

export default HBrandedVendors;