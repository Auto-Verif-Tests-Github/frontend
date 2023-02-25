import React from "react";
import List from "../UI/components/list/List";
import cs from "./CoursesPage.module.css";
import {useParams} from "react-router-dom";

const CoursesPage = () => {
    const {stream_id} = useParams();
    return (
        <div className={cs.courses}>
            <List items={[
                {id: 1, stream_id: 1, name: "Python", teacher_id: 1, link: `/stream/${stream_id}/course/1`},
                {id: 2, stream_id: 1, name: "C", teacher_id: 2, link: `/stream/${stream_id}/course/2`},
                {id: 3, stream_id: 1, name: "ToMP", teacher_id: 3, link: `/stream/${stream_id}/course/3`}]}/>
        </div>
    );
}

export default CoursesPage;