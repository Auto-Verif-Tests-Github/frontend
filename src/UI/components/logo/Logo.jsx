import React from "react";
import cs from "./Logo.module.css";
import {useNavigate} from "react-router-dom";

const Logo = ({className}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate("/")}><span className={cs.logo + " " + className}>Sys.Pro</span></div>
    )
}

export default Logo;