import React from "react";
import '../Static/Resources/Styles/Feed.css'
import { faker } from '@faker-js/faker';
import statusData from './Data/statusData.json';

function StatusBar(){


    return (
        <div className="row" id="statusBar">
            {statusData.map((statusdata)=>{
                return (
                <div>
                    <img src={faker.image.avatar()} className="statusImage" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <br/>
                    <label className="statusName">{faker.name.firstName()}</label>
                </div>
                )
            })}
        </div>
    );
    

   
}

export default StatusBar;