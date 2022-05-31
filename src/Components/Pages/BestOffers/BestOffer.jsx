import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getCat} from "../../../Service/Actions/HomeActions"
import SubCategories from '../SubCategories/SubCategories';
import "./BestOffer.css";


const BestOffer = () =>{

    return(
        <>
            <div>
                <h2 className='Bofferheading'>Best Offers</h2>
                <select className="Bsortcategory" name="sortcategory" >
                    <option value="Greater Noida">Sort by Category</option>
                    <option value="Greater Noida">Fashion</option>
                    <option value="Noida">Art and Craft</option>
                    <option value="Ghaziabad">Pets</option>
                    <option value="Bareilly">Home Decor</option>
                </select>
                <select className="BsortsubCategory" name="sortcategory" >
                    <option value="Greater Noida">Sort by SubCategory</option>
                    <option value="Greater Noida">Fashion</option>
                    <option value="Noida">Art and Craft</option>
                    <option value="Ghaziabad">Pets</option>
                    <option value="Bareilly">Home Decor</option>
                </select>
                <div className='Boffersimgsec'>
                    <img className='Boffersimg' src=' https://www.kubeshop.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-26-at-1.45.22-PM.webp'></img>
                    <img className='Boffersimg' src=' https://www.kubeshop.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-26-at-1.45.20-PM.webp'></img>
                    <img className='Boffersimg' src=' https://www.kubeshop.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-26-at-1.45.19-PM.webp'></img>
                    <img className='Boffersimg' src='  https://www.kubeshop.in/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-26-at-1.45.19-PM-1.webp'></img>
                </div>
            </div>
        </>
    )
}

export default BestOffer;
