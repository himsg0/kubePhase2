import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { getBlog,getBlogcategory } from '../../../Service/Actions/BlogActions';
import "./LatestBlogs.css";

const LatestBlogCard = (props) =>{


    return(
        <Link to={`${props.slugtitle}?cate=${props.category}`}>

        <div className='LatestBlogsection' >
                    
                    <img className='Lblogsimg' src={props.tImage} alt="Blog img"></img>
                    <div className='Lbcontent'>
                        <div className='Lbtimestamp'>
                            <img className='Lbcalendericon' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Planner.webp'></img>
                            <p className='Lbdate'>{props.date}</p>
                        </div>
                        <div className='Lbheading'>{props.title}</div>
                        <div className='Lbtext' dangerouslySetInnerHTML={{ __html: props.desc}}></div>
                    </div>
                </div>
                </Link>
    )
}

export default LatestBlogCard;