import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link , useParams} from "react-router-dom";

import { getBlog,getBlogcategory,getSingleBlog } from '../../../Service/Actions/BlogActions';
import "./SingleBlog.css";


const SingleBlog = () => {
  const {title} = useParams()

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getSingleBlog(title));
   }, [dispatch,title]);
  
   const postData = useSelector(
       (state) => state.SingleBlogReducer.post
   );

   console.log("Mysingledata",postData);

  

  
  
    return (
      <>

        <div className='SBmainsections'>
        { postData?.map((val) => {
                
                return(

                <div className='SBblogsection'>
                  <h2 className='SBheading'>{val.title}</h2>
                  <div className='SBtimestamp'>
                    <img className='SBplanner' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Planner.webp'></img>
                    <p className='SBdate'>{val.createdAt}</p>
                  </div>
                  <div className='SBcontentsec'>
                    <img className='SBimg' src={val.featuredImage}></img> 
                    <div dangerouslySetInnerHTML={{ __html: val.desc}} />
                  </div>
                 
                 
                </div>
                )
                })}
          
          <div className='SBRecentBlogSec'>
            <h2 className='SBRecentBlogHeading'>Related Blog</h2>
            <div className='SBRecentBlogCard'>
              <img className='SBRecentBlogImg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4561.webp'></img>
              <h2 className='SBRecentBlogTitle'>Lorem ipsum dolor sit amet, consectetur</h2>
            </div>
            <div className='SBRecentBlogCard'>
              <img className='SBRecentBlogImg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4561.webp'></img>
              <h2 className='SBRecentBlogTitle'>Lorem ipsum dolor sit amet, consectetur</h2>
            </div>
            <div className='SBRecentBlogCard'>
              <img className='SBRecentBlogImg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4561.webp'></img>
              <h2 className='SBRecentBlogTitle'>Lorem ipsum dolor sit amet, consectetur</h2>
            </div>
            <div className='SBRecentBlogCard'>
              <img className='SBRecentBlogImg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4561.webp'></img>
              <h2 className='SBRecentBlogTitle'>Lorem ipsum dolor sit amet, consectetur</h2>
            </div>
          </div>
        </div>
  
        <div className='SBShareSection'>
          <h2 className='SBShareHeading'>Share</h2>
          <img className='SBShareButtons' src='https://www.kubeshop.in/wp-content/uploads/2022/05/insta-2.webp'></img>
          <img className='SBShareButtons' src='https://www.kubeshop.in/wp-content/uploads/2022/05/facebook-_1_.webp'></img>
          <img className='SBShareButtons' src='https://www.kubeshop.in/wp-content/uploads/2022/05/twitter.webp'></img>
          <img className='SBShareButtons' src='https://www.kubeshop.in/wp-content/uploads/2022/05/pinterest.webp'></img>
        </div>
  
        <div className='SBNextBlogSec'>
          <h2 className='SBNextBlogHeading'>Read Next Blog</h2>
          <div className='SBNextBlogCard'>
            <img className='SBNextBlogimg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4557.webp'></img>
            <h2 className='SBNextBlogTitle'>Morbi consequat arcu non dolor interdum</h2>
          </div>
          <div className='SBNextBlogCard'>
            <img className='SBNextBlogimg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4557.webp'></img>
            <h2 className='SBNextBlogTitle'>Morbi consequat arcu non dolor interdum</h2>
          </div>
          <div className='SBNextBlogCard'>
            <img className='SBNextBlogimg' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Rectangle-4557.webp'></img>
            <h2 className='SBNextBlogTitle'>Morbi consequat arcu non dolor interdum</h2>
          </div>
        </div>
      </>
    )
  }
  
  export default SingleBlog;