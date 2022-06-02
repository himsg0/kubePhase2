import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getCat} from "../../../Service/Actions/HomeActions"
import StoreListing from '../../Layouts/StoreListing/StoreListing';
import HBestOffer from '../../Layouts/HBestOffer/HBestOffer';
import HLatestBlog from '../../Layouts/HLatestBlog/HLatestBlog';


const Home =() =>{
    return(
        <>
        <HBestOffer />
        <StoreListing />
        <HLatestBlog />
        </>
    )
}

export default Home;