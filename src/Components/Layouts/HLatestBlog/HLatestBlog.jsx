import React, {useEffect, useState, useRef} from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heart from "react-heart"
import './HLatestBlog.css'

const HLatestBlog =() =>{
    const LBsettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1
      };

      const [activeHeart, setActiveHeart] = useState(false)
      return(
          <>
          <div className="hLatestBlogSec">
              <h2 className="hLatestBlogHeading">Latest Blog</h2>
              <div className="hLatestBlogCardMainSec">
              <Slider {...LBsettings}>
                    <div className="hLatestBlogCardSubSec">
                        <div className="hLatestBlogCard">
                            <img className="hLatestBlogImg" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Asset-4for-web.webp"></img>
                            <div className="hLatestBlogTimeStamp">
                                <img className='hLatestBlogCalenderIcon' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Planner.webp'></img>
                                <p className='hLatestBlogDate'>02-06-2022</p>
                            </div>
                            <div className="hLatestBlogLikeSec">
                                    <span className="hLatestBlogNoOfLikes">(125 Likes)</span>
                                    <div className="hLatestBlogHeart"><Heart isActive={activeHeart} onClick={() => setActiveHeart(!activeHeart)} /></div>
                            </div>
                            <h2 className="hLatestBlogTitle">Latest Blogs</h2>
                            <div className="hLatestBlogText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            <div className="hLatestBlogReadMore">Read More</div>
                        </div>
                    </div>    
                    <div className="hLatestBlogCardSubSec">
                        <div className="hLatestBlogCard">
                            <img className="hLatestBlogImg" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Asset-4for-web.webp"></img>
                            <div className="hLatestBlogTimeStamp">
                                <img className='hLatestBlogCalenderIcon' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Planner.webp'></img>
                                <p className='hLatestBlogDate'>02-06-2022</p>
                            </div>
                            <div className="hLatestBlogLikeSec">
                                    <span className="hLatestBlogNoOfLikes">(125 Likes)</span>
                                    <div className="hLatestBlogHeart"><Heart isActive={activeHeart} onClick={() => setActiveHeart(!activeHeart)} /></div>
                            </div>
                            <h2 className="hLatestBlogTitle">Latest Blogs</h2>
                            <div className="hLatestBlogText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            <div className="hLatestBlogReadMore">Read More</div>
                        </div>
                    </div>
                    <div className="hLatestBlogCardSubSec">
                        <div className="hLatestBlogCard">
                            <img className="hLatestBlogImg" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Asset-4for-web.webp"></img>
                            <div className="hLatestBlogTimeStamp">
                                <img className='hLatestBlogCalenderIcon' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Planner.webp'></img>
                                <p className='hLatestBlogDate'>02-06-2022</p>
                            </div>
                            <div className="hLatestBlogLikeSec">
                                    <span className="hLatestBlogNoOfLikes">(125 Likes)</span>
                                    <div className="hLatestBlogHeart"><Heart isActive={activeHeart} onClick={() => setActiveHeart(!activeHeart)} /></div>
                            </div>
                            <h2 className="hLatestBlogTitle">Latest Blogs</h2>
                            <div className="hLatestBlogText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            <div className="hLatestBlogReadMore">Read More</div>
                        </div>
                    </div>
                    <div className="hLatestBlogCardSubSec">
                        <div className="hLatestBlogCard">
                            <img className="hLatestBlogImg" src="https://www.kubeshop.in/wp-content/uploads/2022/05/Asset-4for-web.webp"></img>
                            <div className="hLatestBlogTimeStamp">
                                <img className='hLatestBlogCalenderIcon' src='https://www.kubeshop.in/wp-content/uploads/2022/05/Planner.webp'></img>
                                <p className='hLatestBlogDate'>02-06-2022</p>
                            </div>
                            <div className="hLatestBlogLikeSec">
                                    <span className="hLatestBlogNoOfLikes">(125 Likes)</span>
                                    <div className="hLatestBlogHeart"><Heart isActive={activeHeart} onClick={() => setActiveHeart(!activeHeart)} /></div>
                            </div>
                            <h2 className="hLatestBlogTitle">Latest Blogs</h2>
                            <div className="hLatestBlogText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            <div className="hLatestBlogReadMore">Read More</div>
                        </div>
                    </div>
                    
              </Slider>
              </div>
              <div className="hLatestBlogViewAllButtonSec"><button className="hLatestBlogViewAllButton">View All</button></div>
          </div>
          </>
      )
    }

export default HLatestBlog;