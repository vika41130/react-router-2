import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (props) => {
  return(
    <h1> Welcome User - { props.username }</h1>
  );
}

class App extends Component {
  state = {
    loggedin: false
  }

  loginHandle = () => {
    this.setState(prevState => (
        {
          loggedin: !prevState.loggedin
        }
      )
    );
  }

  // logoutHandle = () => {
  //   this.setState({loggedin: false});
  // }

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
              <NavLink to="/user/John" exact activeStyle={{color:'green'}}>John</NavLink>
            </li>

            <li>
              <NavLink to="/user/Peter" exact activeStyle={{color:'green'}}>Peter</NavLink>
            </li>
          </ul>

          <Prompt 
            when={!this.state.loggedin}
            message={(location)=> {
              return location.pathname.startsWith('/user') ? 'Are you sure ?' : true
            }}
          />

          <input type="button" value={ this.state.loggedin ? 'logout' : 'log in'} onClick={this.loginHandle.bind(this)} />

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
            <Route exact path="/user/:username" strict render={({match})=> (
              this.state.loggedin ? ( <User username={match.params.username} />) : (<Redirect to="/" />)
            )}/>
          </div>
        </Router>
    );
  }
}

export default App;
