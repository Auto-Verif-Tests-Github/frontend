import React from "react";
import cs from "./List.module.css"
import ListItem from "./ListItem";

const List = ({items}) => {
    return (
        <div>
            {items.map((v, i) => <ListItem itemClassName={cs.item} key={v.id} header={i + 1} value={v.name} link={`/course/${v.id}`} />)}
        </div>
    );
}

export default List;