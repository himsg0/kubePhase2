import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from 'react-rating-stars-component'
import './HFavoriteVendors.css'

const HFavoriteVendors =() =>{
    const NVsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        rows:2,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        <>
        <div className="hFavoriteVendorsSec">
            <h1 className="hFavoriteVendorsHeading">Favorite Vendors</h1>
            <div className="hFavoriteVendorsCardSec">
            <Slider {...NVsettings}>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
                <div className="hFavoriteVendorsImgSec">
                <img className="hFavoriteVendorsImg" src="https://www.kubeshop.in/wp-content/uploads/2022/06/People-04-Copy.webp"></img>
                <p className="hFavoriteVendorsName">Lorem Ipsum</p>
                </div>
            </Slider>
            </div>
            <div className="hFavoriteVendorsViewAllButtonSec"><button className="hFavoriteVendorsViewAllButton">View All</button></div>
        </div>
        </>
    )
}

export default HFavoriteVendors;