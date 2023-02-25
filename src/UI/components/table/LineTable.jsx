import React from "react";

/*
* task_position_id - от 0; строгий порядок для task_position_id
* solutions - {task_id: int, task_position_id: int, status: str}
*/
const LineTable = ({personName, solutions}) => {
    function generateSolutions() {
        const elements = [];
        for(let i = 0; i <= solutions[solutions.length - 1].task_position_id; i++) {
            elements.push(<th key={i}></th>);
        }
        for(let i = 0; i < solutions.length; i++) {
            elements[solutions[i].task_position_id] = <th key={elements[solutions[i].task_position_id].key}>{solutions[i].status}</th>;
        }
        return elements;
    }

    return (
        <tr>
            <th>{personName}</th>
            {generateSolutions()}
        </tr>
    );
}

export default LineTable;