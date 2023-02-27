import React, {useEffect, useState} from "react";
import cs from "./StreamsPage.module.css";
import List from "../UI/components/list/List";
import Banner from "../UI/components/banner/Banner";
import {isAuthorized} from "../api/auth/auth";
import {getAllStreams} from "../api/requests/streams";
import ModalWait from "../UI/components/wait/ModalWait";
import ListItem from "../UI/components/list/ListItem";

const StreamsPage = () => {
    const [auth, setAuth] = useState();
    const [isLoad, setLoad] = useState(false);
    const [loadText, setLoadText] = useState("Секундочку, генерируем потоки");
    const [list, setList] = useState(<List items={[]} />);
    useEffect(() => setAuth(isAuthorized), []);
    useEffect(loadItems, []);

    function loadItems() {
        getAllStreams(
            () => setLoad(true),
            (data) => {
                const items = data.items.map(e => JSON.parse(`{"id": ${e.id}, "name": "${e.name}", "link": "/stream/${e.id}/courses"}`));
                setList(() => <List items={items} />);
            },
            (props) => {
                setLoadText("Упс, что-то пошло не так");
                props.failed = true;
            },
            (props) => setTimeout(() => setLoad(false), props.failed ? 5000 : 5)
        );
    }

    return (
        <div>
            {auth ? <Banner html={<span>admin</span>} /> : ""}
            {isLoad ? <ModalWait value={loadText} /> : ""}
            <div className={auth ? cs.streams : cs.streams_default}>
                {list}
            </div>
        </div>
    );
}

export default StreamsPage;