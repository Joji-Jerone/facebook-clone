import React,{Component } from "react";

class practice extends Component{
constructor() {
  super()
  this.state = {
    message: "Hello"
  }
  this.ClickHandler = this.ClickHandler.bind(this)
}
ClickHandler() {
  this.setState ({
message: "GoodBye!"
  })

  }
  render(){
  return(
    <div>
      <h1>{this.state.message}</h1>
      <button onClick={this.ClickHandler}>Click</button>
    </div>
  )
}
}

 
  export default practice ;