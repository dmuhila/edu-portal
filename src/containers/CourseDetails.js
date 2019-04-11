import React, {useState, useEffect} from "react";
import axios from "axios";
import LessonList from "../components/LessonList";

export const AppContext = React.createContext();
export const HooksContext = React.createContext();
 function CourseDetails(props) {

     const [course, setCourse] = useState([]);
      
     useEffect(() => {
        axios.get("../input.json")
        .then((res)=>{
            console.log("entire res "+res.data.courses.toString())
            console.log("match params id  "+props.match.params.id)
            setCourse(
                [...course, ...res.data.courses.filter((c)=>(
                    c.cid === props.match.params.id
                ))])
                console.log("lessons--> "+course.length)
        })
    },[])
 
        return (
            <div>
            {course[0] && 
                <>
                <h1>{course[0].cname}</h1>
                {console.log("course "+course)}
                {console.log("lessons "+course.length)}
                {console.log("lessons "+course[0].lessons)}
                <p>{course[0].cid}</p>
                <p>{course[0].cdesc}</p>
                
                <AppContext.Provider value={course[0]}>
                <HooksContext.Provider>
                    <LessonList lessons={course[0].lessons} />
                </HooksContext.Provider>
                </AppContext.Provider>
                </>}
            </div>
        )
    }


export default CourseDetails