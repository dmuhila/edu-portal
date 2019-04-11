import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './containers/Home';
import CourseDetails from './containers/CourseDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        options : ["All","Diversity","Inclusion","iSecurity"]
    }
}
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <div>
              <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/courseDetails/:id' component={CourseDetails} />
              </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
