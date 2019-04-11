import React from "react";
import Course from "./Course";

const CourseList = (props) => {
    return (
        <div>
            <ul>
            {props.courses.map((c,id)=> (
                <li key={c.cid}>
                <Course course={c}/>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default CourseList