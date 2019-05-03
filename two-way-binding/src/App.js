import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    name:"Deepak"
  }

  // changeName=()=>{
  //   this.setState({      //Simple Button onChange
    
  //     name:"LoverBoy"
  //   })
  //   console.log(this.state)
  // }

  changeName=(newName)=>{
    this.setState({
                            //Change using Anonymous function
      name:newName
    })
    console.log(this.state)
  }
  changeNameFromInput=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
       {/* <button onClick={this.changeName}>Change state </button> */}
       {/* <button onClick={()=>this.changeName("LoverBoy")}>Change state Using Anonymous</button> */}
       <button onClick={this.changeName.bind(this,"LoverBoy")} >Change State using two way binding</button>
       <br/>
       <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/><button>Submit</button>
        <br/>
       <div>{this.state.name}</div>
      </div>
    );
  }
}
export default App;
