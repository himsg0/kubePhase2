import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getCat} from "../../../Service/Actions/HomeActions"
import HCategory from '../../Layouts/HCategory/HCategory';
import StoreListing from '../../Layouts/StoreListing/StoreListing';
import HBestOffer from '../../Layouts/HBestOffer/HBestOffer';
import HLatestBlog from '../../Layouts/HLatestBlog/HLatestBlog';
import HAdvertise from '../../Layouts/HAdvertise/HAdvertise'
import HNewVendors from '../../Layouts/HNewVendors/HNewVendors';
import HBrandedVendors from '../../Layouts/HBrandedVendors/HBrandedVendors';
import HFavoriteVendors from '../../Layouts/HFavoriteVendors/HFavoriteVendors';


const Home =() =>{
    return(
        <>
        <HCategory />
        <HAdvertise />
        <HBestOffer />
        <StoreListing />
        <HNewVendors />
        <HFavoriteVendors />
        <HBrandedVendors />
        <HLatestBlog />
        </>
    )
}

export default Home;