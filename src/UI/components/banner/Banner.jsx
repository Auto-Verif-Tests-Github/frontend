import React from "react";
import cs from "./Banner.module.css";

const Banner = ({html, className}) => {
    return (
        <div className={cs.banner + " " + className}>{html}</div>
    );
}

export default Banner;