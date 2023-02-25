import React, {useEffect} from "react";
import cs from "./Popup.module.css";

const Popup = ({value, onDelete, onDeleteTimeout, fixX, fixY}) => {
    useEffect(() => {
        if(onDelete !== undefined && onDeleteTimeout !== undefined) {
            setTimeout(onDelete, onDeleteTimeout);
        }
    }, []);

    return (
        <div className={cs.popup} style={{top: fixY, left: fixX}}><span>{value}</span></div>
    );
}

export default Popup;