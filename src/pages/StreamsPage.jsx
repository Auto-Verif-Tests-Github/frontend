import React, {useEffect, useState} from "react";
import cs from "./StreamsPage.module.css";
import List from "../UI/components/list/List";
import Banner from "../UI/components/banner/Banner";
import {isAuthorized} from "../api/auth/auth";

const StreamsPage = () => {
    const [auth, setAuth] = useState();
    useEffect(() => setAuth(isAuthorized), []);

    return (
        <div>
            {auth ? <Banner html={<span>admin</span>} /> : ""}
            <div className={auth ? cs.streams : cs.streams_default}>
                <List items={[
                    {id: 1, name: "Системное программирование 2022", link: `/stream/1/courses`},
                    {id: 2, name: "Системное программирование 2023", link: `/stream/2/courses`},
                    {id: 3, name: "Системное программирование 2024", link: `/stream/3/courses`},
                    {id: 4, name: "Системное программирование 2025", link: `/stream/4/courses`}
                ]} />
            </div>
        </div>
    );
}

export default StreamsPage;