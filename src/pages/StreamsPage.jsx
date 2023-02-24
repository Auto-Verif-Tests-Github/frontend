import React from "react";
import cs from "./StreamsPage.module.css";
import List from "../UI/components/list/List";

const StreamsPage = () => {
    return (
        <div className={cs.streams}>
            <List items={[
                {id: 1, name: "Системное программирование 2022", link: "/hello"},
                {id: 2, name: "Системное программирование 2023", link: "/hello"},
                {id: 3, name: "Системное программирование 2024", link: "/hello"},
                {id: 4, name: "Системное программирование 2025", link: "/hello"}
            ]} />
        </div>
    );
}

export default StreamsPage;