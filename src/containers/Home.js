import React, { Component } from 'react';
import Nav from '../components/Nav';
import Dropdown from '../components/Dropdown';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        options : ["All","Diversity","Inclusion","iSecurity"]
    }
}
  render() {
    return (
      <div className="App">
          <Nav className="navbar"/>
          <Dropdown className="dropdown"
            options={this.state.options}/>
      </div>
    );
  }
}

export default Home;
