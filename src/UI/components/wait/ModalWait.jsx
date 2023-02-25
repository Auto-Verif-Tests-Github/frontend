import React from "react";
import cs from "./ModalWait.module.css";
import loading from "../../../images/loading_icon.png";

const ModalWait = ({value, className}) => {
    return (
        <div className={cs.popup + " " + className}>
            <img draggable="false" className={cs.spin} src={loading} alt="" />
            <span className={cs.value}>{value}</span>
        </div>
    );
}

export default ModalWait;