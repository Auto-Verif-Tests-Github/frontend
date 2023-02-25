import React from "react";
import {useParams} from "react-router-dom";
import CourseTable from "../UI/components/table/CourseTable";
import LineTable from "../UI/components/table/LineTable";

const CourseViewPage = () => {
    const {course_id, stream_id} = useParams();

    return (
        <div>
            <CourseTable
                courseName="Наукоемкое программирование на Python"
                tableInfo={[
                    <LineTable personName="Петр Иванов" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />,
                    <LineTable personName="Вася Андреев" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />,
                    <LineTable personName="Николай Сидоров" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />,
                    <LineTable personName="Жанна Горевая" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />,
                    <LineTable personName="Артур Третий" solutions={[{task_id: 1, status: "П", task_position_id: 0}, {task_id: 50, status: "5б", task_position_id: 1}]} />,
                    <LineTable personName="Жак Польских" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />
                ]}
                tasks={[
                    {id: 1, id_position: 0, date: "02.02.2001", deadline_date: "03.02.2001", name: "Мини-Задача 1"},
                    {id: 50, id_position: 1, date: "05.05.2004", deadline_date: "11.05.2004", name: "Мини-Задача 2"}
                ]} />
        </div>
    );
}

export default CourseViewPage;