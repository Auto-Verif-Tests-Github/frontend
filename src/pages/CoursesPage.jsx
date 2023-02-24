import React from "react";
import List from "../UI/components/list/List";
import cs from "./CoursesPage.module.css";

const CoursesPage = () => {
    return (
        <div className={cs.courses}>
            <List items={[
                {id: 1, stream_id: 1, name: "Python", teacher_id: 1},
                {id: 2, stream_id: 1, name: "C", teacher_id: 2},
                {id: 3, stream_id: 1, name: "ToMP", teacher_id: 3}]}/>
        </div>
    );
}

export default CoursesPage;