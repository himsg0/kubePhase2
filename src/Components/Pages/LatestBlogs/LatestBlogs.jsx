import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { getBlog,getBlogcategory } from '../../../Service/Actions/BlogActions';
import SingleBlog from '../SingleBlog/SingleBlog';
import LatestBlogCard from "./LatestBlogCard"
import "./LatestBlogs.css";



const LatestBlogs = () =>{

   const [ blogCategory, setBlogCategory ]=useState("")

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBlog(blogCategory));
   }, [dispatch,blogCategory]);
  
   const postData = useSelector(
       (state) => state.blogReducer.post
   );

   console.log("Blog Data",postData);

   useEffect(() => {
    dispatch(getBlogcategory());
}, [dispatch]);

const postCatData = useSelector(
   (state) => state.blogCategoryReducer.postCat
);

console.log("Blog cat Data", postCatData);

   
   

   
   console.log("blogcat",blogCategory);
    return(
        <>
            <div>
                <h2 className='Lblogsheading'>Latest Blogs</h2>
                <select className="Lbsortcategory" name="sortcategory" id='category' onChange= {(e)=>{
                    setBlogCategory(e.target.value);
                    console.log("blogcat",blogCategory);
                }}>
                    <option value="">Sort by Category</option>
                    {postCatData?.map((val) => {
                        return (
                           <option key={val.id} >{val}</option>
                        )
                    })}
                </select>
                <select className="LbsortsubCategory" name="sortcategory" >
                    <option value="Greater Noida">Sort by Date</option>
                    <option value="Greater Noida">Oldest to Latest</option>
                    <option value="Noida">Latest to Oldest</option>
                </select>


                { postData?.map((val) => {
                {console.log("MYDATA",postData);}
                return(

                    <LatestBlogCard key={val._id} tImage={val.thumbnailImage} date={val.createdAt} title={val.title} desc={val.desc} fImage={val.featuredImage}/>
                )
                })}
                

                
            </div>
        </>
    )
}

export default LatestBlogs;
