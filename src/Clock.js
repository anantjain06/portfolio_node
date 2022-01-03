import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Clock extends React.Component {

    constructor(props){
        super(props)
        //this.setState({date:new Date()});
        //this.state.date = new Date();
        this.state = {date: new Date(), isLoggedIn:false};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick() {
        console.log("dfdfdf");
        //this.state = {isLoggedIn: true};
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }

    componentDidUpdate(){
        //this.state = {date:new Date()}
    }
    
    render(){
        let button;
        console.log(this.state.isLoggedIn);
        if (this.state.isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
          button = <LoginButton onClick={this.handleLoginClick} />;
        }
    
            console.log(this.props)
           return( <div>
              Date:  {this.props.date.toLocaleTimeString()} {button}
            </div>)
    }
}

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

export default Clock;