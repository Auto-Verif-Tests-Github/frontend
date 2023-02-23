import React from "react";
import cs from "./Logo.module.css";

const Logo = ({className}) => {
    return (
        <div><span className={cs.logo + " " + className}>Sys.Pro</span></div>
    )
}

export default Logo;