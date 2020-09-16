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

  addNinja = (ninja) => { 
      ninja.id  = Math.random();
      let ninjas = [...this.state.ninjas, ninja];
      this.setState({
        ninjas : ninjas
      })
      console.log("helllo", ninja);
  }

  deleteNinja = (id) => {
      console.log("ID: ", id);
      let ninjas = this.state.ninjas.filter(ninja  => {
        return ninja.id !== id; 
      })
      this.setState({
        ninjas : ninjas
      })
  }

  componentDidMount(){
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component Updated");
    console.log(prevProps, prevState);
  }

  render() {
  return (
    <div className="App">
        <h1>My first React App !</h1>
          <Ninjas ninjas = {this.state.ninjas} deleteNinja = {this.deleteNinja}/>
          <AddNinja addNinja={this.addNinja} />
     </div>
  );
  }
}

export default App;
