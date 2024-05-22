import React, { Component } from 'react'

class message extends Component {

  constructor() {
    super();
    this.state = {
      message: "Welcome User Click on the button"
    }

  }
  change() {
    const text = prompt("Enter the text to be displayed: ");
    this.setState({
      message : text
    })
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.message}
        </h1>
        <button onClick={()=>this.change()}>
          Click Me
        </button>
      </div>
    )
  }
}


export default message
