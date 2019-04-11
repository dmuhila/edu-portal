import React from "react";
import axios from "axios";
import CourseList from "./CourseList";

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem : "All",
            showFlag : false,
            courses: []
        }
    }

    handleClick = () => {
        this.setState((prevState)=>({
            showFlag: !(prevState.showFlag)
        }))
    }

    handleSelect = (id) => {
        this.setState((prevState)=>({
            selectedItem : this.props.options[id],
            showFlag: !(prevState.showFlag)
        }))
        axios.get("./input.json")
        .then((res)=> {
            console.log(res.data.courses);
            this.setState(()=> ({
                courses: res.data.courses
            }))
        })
    }

    render() {
        // var arr = this.state.courses.filter((c,id)=> 
        //     c.ccat === this.state.selectedItem
        // )
        // console.log(arr)
        
        return (
            <div>
                <input type='text' defaultValue={this.state.selectedItem}
                       onClick={this.handleClick} />
                {this.state.showFlag && 
                    <div>
                    {this.props.options.map((op,id)=>{
                        return (
                            <div key={id} onClick={this.handleSelect.bind(this,id)}>
                            {op}</div>
                        )
                    })}
                    </div>}
                {console.log(this.state.courses)}
                {this.state.selectedItem === 'All' ? 
                <CourseList courses={this.state.courses}/> :
                <CourseList courses={this.state.courses.filter((c,id)=> 
                    c.ccat === this.state.selectedItem
                )}/>
                }
            </div>
        )
    }
}

export default Dropdown