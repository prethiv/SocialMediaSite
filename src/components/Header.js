import React from "react";
import LogoIcon from '../Static/Resources/Icons/hotmail.png'
import HomeIcon from '../Static/Resources/Icons/home.png'
import '../Static/Resources/Styles/Header.css';

function Header(){
    return (
        <div className="row">

            <div className="col-2">
                <img src={LogoIcon} className="App-logo"/>
            </div>
            <div className="col-6 d-none d-md-inline d-lg-inline d-xl-inline">
                <label className="App-Name">Impressions</label>
            </div>
            <div className="col-4">
                <img src={HomeIcon} className="homeIcon"/>
            </div>

        </div>
    );
}

export default Header;