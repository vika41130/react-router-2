import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ({match}) => {
  return(
    <h1> Welcome User - { match.params.username }</h1>
  );
}

class App extends Component {
  state = {
    loggedin: false
  }

  loginHandle = () => {
    this.setState({loggedin: true});
  }

  render() {
    return (
        <Router>
          <div className="App">
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink>
              </li>
            <li>
              <NavLink to="/about/" exact activeStyle={{color:'green'}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/user/" exact activeStyle={{color:'green'}}>User</NavLink>
            </li>

            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li> */}
          </ul>

          {/* <input type="button" value="log in" onClick={this.loginHandle.bind(this)}/> */}

            <Route exact path="/" strict render={
              () => {
                return (<h1>Home</h1>)
              }
            }/>
            <Route exact path="/about/" strict render={
              () => {
                return (<h1>About</h1>)
              }
            }/>
            <Route exact path="/user/" strict component={User}/>
            <Route exact path="/user/:username" strict component={User}/>
            {/* <Route exact path="/user/:username" strict render={()=> (
              this.state.loggedin ? ( <User />) : (<Redirect to="/" />)
            )}/> */}
          </div>
        </Router>
    );
  }
}

export default App;
