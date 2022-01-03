import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import Clock from './Clock';

function App() {
  return(
    <Welcome/>
  )
}
/**************Es6 Method to define the component ***************/
class Welcome extends React.Component {
  render() {
    return (<div><Clock date={new Date()} /></div>)
  }
}
//setInterval(App, 1000);
export default App;
