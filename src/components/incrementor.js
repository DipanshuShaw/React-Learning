import React, { Component } from 'react'

export class incrementor extends Component {
    
    constructor() {
        super()
// let count = 0;
      this.state = {
         count : 0
      }
    }

    increment(){
        // this.state.count = this.state.count + 1;
        this.setState({
            count : this.state.count + 1
        })
    }
    


  render() {
    return (
      <div>
        <h1>
            Count - {this.state.count}
        </h1>
        <button onClick={()=> this.increment()}>
            increment
        </button>
      </div>
    )
  }
}

export default incrementor
