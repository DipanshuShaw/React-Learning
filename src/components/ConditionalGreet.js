import React, { Component } from 'react'

class ConditionalGreet extends Component {
constructor(props) {
  super(props)

  this.state = {
    isLoggedIn : false
  }
}
logged(){
    let statement = prompt("Do you want to log in (Y/N): ");
    if(statement === 'Y'){
      statement = true;
    }if(statement === 'N'){
      statement = false
    }
    this.setState({
        isLoggedIn : statement
    })
}

    render() {
        let message ='';
        if(this.state.isLoggedIn){
            message = 
            <div>
                <div>
                Hello Logged User
                </div>
                <button onClick={()=>
                    this.setState({
                        isLoggedIn : false
                    })
                }>CLick to Logout</button>
            </div>
        }
        else{
            message = 
            <div>
                <div>
                    Hello Guest
                </div>
            <button onClick={()=> this.logged()}>CLick to Login</button>
            </div>
        }
        return(
            message 
        )
  }
}

export default ConditionalGreet
