import React, {Component} from 'react';
const InitialState = {
    someState: 1
 }
 class Appt extends Component {
 
  constructor(props) {
   super(props);
 
   // Retrieve the last state
   this.state = sessionStorage.getItem("appState") ? JSON.parse(sessionStorage.getItem("appState")) : InitialState;
 
 }
 
 componentWillUnmount() {
   // Remember state for the next mount
   sessionStorage.setItem('appState', JSON.stringify(this.state));
 }

handleInc = () => {
    console.log(this.state.someState);
    this.setState({someState: this.state.someState + 1})
    sessionStorage.setItem('appState', JSON.stringify(this.state));
    //localStorage.clear()
 } 
 render() {
   return(
       <div>
           <button onClick = {this.handleInc}>ClickMe</button>
           <p> {this.state.someState}</p>
       </div>
   )
  }
 }
 
 export default Appt;