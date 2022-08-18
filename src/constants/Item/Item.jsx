import React from "react";

import "./Item.scss";

export default function  Item(props){
    
    return(
        <div className="item">
            <div className="item__photo">
                    <span className="photo__background"><span>{props.id}</span></span>
                    <img src={props.imgSrc} alt={props.altDescription}/>
            </div>
            <div className="item__info">
                <h4>{props.title}</h4>
                <p>Floor price <span className="highlight">*</span> 54</p>
            </div>
            <div className="item__price">
                <span className="hightlight">+ 12,78%</span>
                <span>$ 2345.24</span>
            </div>
        </div>
    )
}