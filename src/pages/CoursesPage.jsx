import React, {useEffect, useState} from "react";
import List from "../UI/components/list/List";
import cs from "./CoursesPage.module.css";
import {useParams} from "react-router-dom";
import {getAllCoursesByStreamId} from "../api/requests/courses";
import ModalWait from "../UI/components/wait/ModalWait";

const CoursesPage = () => {
    const {stream_id} = useParams();
    const [list, setList] = useState();
    const [load, setLoad] = useState(false);
    const [loadText, setLoadText] = useState("Подождите, мы просматриваем курсы");
    useEffect(loadItems, []);

    function loadItems() {
        getAllCoursesByStreamId(
            stream_id,
            () => setLoad(true),
            (data) => {
                const items = data.items.map(e => JSON.parse(`{"id": ${e.id}, "name": "${e.name}", "link": "/stream/${stream_id}/course/${e.id}?name=${encodeURI(e.name)}", "teacher_id": ${e.teacher_id}, "stream_id": ${e.stream_id}}`));
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
        <div className={cs.courses}>
            {load ? <ModalWait value={loadText} /> : ""}
            {list}
        </div>
    );
}

export default CoursesPage;