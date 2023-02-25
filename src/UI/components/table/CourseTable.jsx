import React, {useState} from "react";
import cs from "./CourseTable.module.css";

/*
* tableInfo - LineTable
* tasks - [{id: int, id_position: int, date: int, deadline_date: int, name: str}, ...]
*/
const CourseTable = ({courseName, tableInfo, tasks}) => {
    const [info, setInfo] = useState(tableInfo);

    return (
        <div className={cs.course}>
            <span className={cs.table_name}>{courseName}</span>
            <table className={cs.table} border="1">
                <tbody>
                    <tr>
                        <th>Название</th>
                        {tasks.map(e => <th key={e.id}>{e.name}</th>)}
                    </tr>
                    <tr>
                        <th>Студент</th>
                        {tasks.map(e => <th key={e.id}>{e.date}</th>)}
                    </tr>
                    <tr className={cs.deadline}>
                        <th>-</th>
                        {tasks.map(e => <th key={e.id}>{e.deadline_date}</th>)}
                    </tr>
                </tbody>
                {info}
            </table>
        </div>
    );
}

export default CourseTable;