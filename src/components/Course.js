import React from "react";
import { Link } from 'react-router-dom';

const Course = (props) => {    
    return (
        <div>
        <Link to={`/courseDetails/${props.course.cid}`}>
            <div>
                <p>{props.course.cname}</p>
                <p>{props.course.cid}</p>
                <p>{props.course.cdesc}</p>
            </div>
        </Link>
        </div>
    )
}

export default Course