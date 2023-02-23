import React from "react";
import cs from "./TwitterButton.module.css";

const TwitterButton = ({buttonStyle, imgSrc, imgStyle, value, onClick}) => {
    return (
        <div className={cs.twitter_button + " " + buttonStyle} onClick={onClick}>
            <img src={imgSrc} className={cs.image + " " + imgStyle} alt="" draggable="false" />
            <span className={cs.value}>{value}</span>
        </div>
    );
}

export default TwitterButton;