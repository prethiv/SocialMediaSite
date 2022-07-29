import React from "react";
import '../Static/Resources/Styles/Feed.css'
function TitleBarOfFeed(props){
    return (
        <div>
            <label>{props.data.title}</label><br/>
            <label id="datePosted">{props.data.datePosted}</label>
        </div>
    )
}
export default TitleBarOfFeed;