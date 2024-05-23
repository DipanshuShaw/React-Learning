import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         slapCount : 0
      }
      this.slapCounter = this.slapCounter.bind(this)
    }

    slapCounter(){
        alert(`slap count - ${++this.state.slapCount}`)
    }
    

  render() {
    return (
      <div>
        <Child slapCounting = {this.slapCounter} />
      </div>
    )
  }
}

export default Parent
