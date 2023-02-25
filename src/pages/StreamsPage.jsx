import React from "react";
import cs from "./StreamsPage.module.css";
import List from "../UI/components/list/List";

const StreamsPage = () => {
    return (
        <div className={cs.streams}>
            <List items={[
                {id: 1, name: "Системное программирование 2022", link: `/stream/1/courses`},
                {id: 2, name: "Системное программирование 2023", link: `/stream/2/courses`},
                {id: 3, name: "Системное программирование 2024", link: `/stream/3/courses`},
                {id: 4, name: "Системное программирование 2025", link: `/stream/4/courses`}
            ]} />
        </div>
    );
}

export default StreamsPage;