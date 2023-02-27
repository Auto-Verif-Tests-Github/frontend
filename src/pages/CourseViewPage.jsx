import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CourseTable from "../UI/components/table/CourseTable";
import LineTable from "../UI/components/table/LineTable";
import {getAllPeopleByStreamId} from "../api/requests/people";
import {getAllTasksByCourseIdAndStreamId} from "../api/requests/tasks";
import {getAllSolutionsByCourseId} from "../api/requests/solutions";
import ModalWait from "../UI/components/wait/ModalWait";
import List from "../UI/components/list/List";

const CourseViewPage = () => {
    const {course_id, stream_id} = useParams();
    const name = new URLSearchParams(window.location.search).get("name");
    const [table, setTable] = useState();
    const [isLoad, setLoad] = useState(false);
    const [loadText, setLoadText] = useState("Секундочку, генерируем потоки");
    useEffect(loadCourse, []);

    function getSolutionsByPeople(peopleId, solutions) {
        for(let i = 0; i < solutions.length; i++) {
            if(solutions[i][peopleId + ""] !== undefined) return solutions[i][peopleId + ""];
        }
        return []
    }

    function loadCourse() {
        getAllPeopleByStreamId(
            stream_id,
            () => setLoad(true),
            (data) => {
                const people = data.items;
                getAllTasksByCourseIdAndStreamId(
                    course_id, stream_id, undefined,
                    (data) => {
                        const tasks = data.items;
                        getAllSolutionsByCourseId(
                            course_id, undefined,
                            (data) => {
                                const solutions = data.items

                                setTable(() => <CourseTable
                                    courseName={name}
                                    tasks={tasks.map((e, i) => JSON.parse(`{"id": ${e.id}, "id_position": ${i}, "date": "${e.start_date}", "deadline_date": "${e.deadline_date}", "name": "${e.name}"}`))}
                                    tableInfo={people.map((e, i) => {
                                        const answers = getSolutionsByPeople(e.id, solutions);
                                        console.log(answers);
                                        console.log(solutions);
                                        return <LineTable key={e.id} personName={e.name} solutions={answers.map((el, ii) => {
                                            console.log(el[0].task_id);
                                            return JSON.parse(`{"task_id": ${el.task_id}, "status": "${el.status}", "task_position_id": ${ii}}`)
                                        })} />
                                    })}
                                />);
                            },
                            undefined, undefined
                        );
                    },
                    undefined, undefined
                )
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
            {isLoad ? <ModalWait value={loadText} /> : ""}
            {/*<CourseTable*/}
            {/*    courseName="Наукоемкое программирование на Python"*/}
            {/*    tableInfo={[*/}
            {/*        <LineTable key={1} personName="Петр Иванов" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />,*/}
            {/*        <LineTable key={2} personName="Вася Андреев" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />,*/}
            {/*        <LineTable key={3} personName="Николай Сидоров" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />,*/}
            {/*        <LineTable key={4} personName="Жанна Горевая" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />,*/}
            {/*        <LineTable key={5} personName="Артур Третий" solutions={[{task_id: 1, status: "П", task_position_id: 0}, {task_id: 50, status: "5б", task_position_id: 1}]} />,*/}
            {/*        <LineTable key={6} personName="Жак Польских" solutions={[{task_id: 1, status: "Р", task_position_id: 0}]} />*/}
            {/*    ]}*/}
            {/*    tasks={[*/}
            {/*        {id: 1, id_position: 0, date: "02.02.2001", deadline_date: "03.02.2001", name: "Мини-Задача 1"},*/}
            {/*        {id: 50, id_position: 1, date: "05.05.2004", deadline_date: "11.05.2004", name: "Мини-Задача 2"}*/}
            {/*    ]} />*/}
            {table}
        </div>
    );
}

export default CourseViewPage;