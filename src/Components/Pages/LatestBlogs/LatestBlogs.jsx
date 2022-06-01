import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { getBlog,getBlogcategory } from '../../../Service/Actions/BlogActions';
import SingleBlog from '../SingleBlog/SingleBlog';
import BlogCard from "./BlogCard"
import "./LatestBlogs.css";



const LatestBlogs = () =>{

   const [ blogCategory, setBlogCategory ]=useState("")

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBlog(blogCategory));
   }, [dispatch,blogCategory]);
  
   const blogData = useSelector(
       (state) => state.blogReducer.post
   );

   const [ sortedData, setSortedData ]=useState("")


   useEffect(() => {
    dispatch(getBlogcategory());
}, [dispatch]);

const postCatData = useSelector(
   (state) => state.blogCategoryReducer.postCat
);

console.log("Blog Data",blogData);




 const blogDateFilter = (e) =>{ 
     if(e.target.value=="Oldest")
     {
         console.log("Oldest");
         
          setSortedData(blogData.slice().sort((a, b) => new Date(...a.createdAt.split('/').reverse()) - new Date(...b.createdAt.split('/').reverse())));
          
         
     }
     else if(e.target.value=="Latest"){
        console.log("Latest");
        
        setSortedData(blogData.slice().sort((a, b) =>  new Date(...b.createdAt.split('/').reverse()) - new Date(...a.createdAt.split('/').reverse())));
      }
      else if(e.target.value==""){
        console.log("Default");
        setSortedData(null);
      }
   
 }

 

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
                <select className="LbsortsubCategory" name="sortcategory" onChange={blogDateFilter} >
                    <option value="">Sort by Date</option>
                    <option value="Oldest">Oldest to Latest</option>
                    <option value="Latest" >Latest to Oldest</option>
                </select>


                {sortedData? sortedData.map((val) => {
                console.log("sorted blog data",blogData);
                return(

                    <BlogCard key={val._id} tImage={val.thumbnailImage} date={val.createdAt} title={val.title} slugtitle={val.slugtitle} desc={val.desc} fImage={val.featuredImage} category={val.category}/>
                )
                }) :  blogData.map((val) => {
                    console.log("Unsorted blog data",blogData);
                    return(
    
                        <BlogCard key={val._id} tImage={val.thumbnailImage} date={val.createdAt} title={val.title} slugtitle={val.slugtitle} desc={val.desc} fImage={val.featuredImage} category={val.category}/>
                    )
                    })}
                

                
            </div>
        </>
    )
}

export default LatestBlogs;
