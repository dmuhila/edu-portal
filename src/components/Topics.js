import React from "react";
import {AppContext} from "../containers/CourseDetails";

const Topics = (props) => {
    return (
        <div>
            <div>
                <p>{props.lesson.t1}</p>
                <p>{props.lesson.t2}</p>
                <AppContext.Consumer>
                    {(con)=>con.cid}
                </AppContext.Consumer>
            </div>
        </div>
    )
}

Topics.contextType = AppContext;

export default Topics
