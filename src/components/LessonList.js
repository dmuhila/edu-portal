import React from "react";
import Lesson from "./Lesson";

const LessonList = (props) => {
    return (
        <div>
            <ul>
            {props.lessons.map((l,id)=> (
                <li key={id}>
                <Lesson lesson={l}/>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default LessonList