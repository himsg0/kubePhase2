import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HAdvertise.css'

const HAdvertise =() =>{
    const BOsettings = {
        className: "center",
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "210px",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <>
        <div className="hAdvertiseSec">
            <div className="hAdvertiseCardSec">
            <Slider {...BOsettings}>
                {/* <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads-01-Copy.webp"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads-01-Copy.webp"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads-01-Copy.webp"></img>
                </div> */}
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads-01-Copy.webp"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads-01-Copy.webp"></img>
                </div>
                <div className="hAdvertiseImgSec">
                <img className="hAdvertiseImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/Ads-01-Copy.webp"></img>
                </div>
            </Slider>
            </div>
        </div>
        </>
    )
}

export default HAdvertise;