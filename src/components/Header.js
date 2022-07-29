import React from "react";
import LogoIcon from '../Static/Resources/Icons/hotmail.png'
import HomeIcon from '../Static/Resources/Icons/home.png'
import ChatIcon from '../Static/Resources/Icons/chat.png'
import SearchIcon from '../Static/Resources/Icons/search.png'
import '../Static/Resources/Styles/Header.css';
import ReactTooltip from 'react-tooltip';

function Header(){
    return (
        <div className="row">

            <div className="col-2">
                <img src={LogoIcon} className="App-logo"/>
            </div>
            <div className="col-6 d-none d-md-inline d-lg-inline d-xl-inline">
                <label className="App-Name">Impressions</label>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-5 col-5">
                <ReactTooltip />
                <img src={HomeIcon} className="homeIcon" data-tip="Home" />
                <img src={ChatIcon} className="homeIcon" data-tip="Chat"/>
                <img src={SearchIcon} className="homeIcon" data-tip="Search"/>
            </div>

        </div>
    );
}

export default Header;