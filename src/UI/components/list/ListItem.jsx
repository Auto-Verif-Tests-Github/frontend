import React from "react";
import cs from "./ListItem.module.css";
import {useNavigate} from "react-router-dom";

const ListItem = ({header, value, link, itemClassName, key}) => {
    const navigate = useNavigate();
    return (
        <div key={key} className={cs.item + " " + itemClassName} onClick={link === undefined ? () => false : () => navigate(link)}>
            <div className={cs.header + " " + cs.headval}>{header}</div>
            <div className={cs.value + " " + cs.headval}>{value}</div>
        </div>
    );
}

export default ListItem;