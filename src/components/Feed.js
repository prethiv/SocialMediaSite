import React from "react";
import TitleBarOfFeed from "./TitleBarOfFeed";
import '../Static/Resources/Styles/Feed.css'
import ThreeDots from '../Static/Resources/Icons/dots-three-vertical.png'
import Like from '../Static/Resources/Icons/like.png';
import Comment from '../Static/Resources/Icons/comment.png';
import { faker } from '@faker-js/faker';
import feedData from './Data/feedData.json';
function Feed(){

    return (feedData.map((data)=>{
        return (
            <div>
            <div className="row">
    
                <div className="col-6" id="titleBarOfFeed">
                    <TitleBarOfFeed  data={{
                        title:faker.name.middleName(),
                        datePosted:data.datePosted
                    }}/>
                </div>
                <div className="col-3">
                
                </div>
                <div className="col-3 d-md-none d-lg-none d-sm-inline">
                <img src={ThreeDots} className="threeDots" />
                {/* <img src={ThreeDots} className="threeDots" /> */}
                </div>
            </div>
            <div className="row">
            <img src={faker.image.city()} className="postsImage" />
                {/* <div className="col-4">
    
                </div>
                <div className="col-4">
                <img src={MiroredMe} className="postsImage" />
                </div>
                <div className="col-4">
                    
                </div> */}
            </div>
            <br/>
            <div className="row">
           
            <img src={Like} className="likeIcon" />
            <img src={Comment} className="commentIcon" />
            </div>
            <div className="row">
                <label className="captionText">{faker.lorem.paragraph()} </label>
            </div>
            <div className="row">
                <br/>
                <br/>
            </div>
            </div>
        );
    }))
    
}

export default Feed;