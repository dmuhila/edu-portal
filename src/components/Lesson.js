import React from "react";
import Topics from "./Topics";

class Lesson extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showFlag: false
        }
    }
 
    handleClick = () => {
        this.setState((prev)=> ({
            showFlag: !prev.showFlag
        }))
    }
    
    render() {
    return (
        <div>
            <p onClick={this.handleClick}>{this.props.lesson.lname}</p>
            {this.state.showFlag &&
                <Topics lesson={this.props.lesson}/>
            // <div>
            //     <p>{this.props.lesson.t1}</p>
            //     <p>{this.props.lesson.t2}</p>
            // </div>
            }
        </div>
    )}
}

export default Lesson