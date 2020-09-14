import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {

  state = {
    ninjas  :[
      { name : 'Shitij', age : 30, belt : 'black', id:1},
      { name : 'Neha', age : 30, belt : 'white', id:2},
      { name : 'Akshit', age : 27, belt : 'yellow', id:3}
    ]
  }

  render() {
  return (
    <div className="App">
        <h1>My first React App !</h1>
          <Ninjas ninjas = {this.state.ninjas}/>
          <AddNinja />
     </div>
  );
  }
}

export default App;
