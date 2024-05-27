import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         password : '',
         skill : 'Select an option'
      }
    }

    usernameHandler = event =>{
        this.setState({
            username : event.target.value
        })
    }
    passwordHandler = (event)=>{
        this.setState({
            password : event.target.value
        })
    }
    skillHandler = (event)=>{
        this.setState({
            skill : event.target.value
        })
    }

    submission = (event)=> {
        alert(`${this.state.username}  ${this.state.password} ${this.state.skill}`);
        event.preventDefault();
    }
    

  render() {
    const { username , password , skill } = this.state;
    return (
      <form onSubmit={this.submission}>
        <div>
            <label>
            Username
            </label>
            <input type='text' value={username} onChange={this.usernameHandler}></input>
        </div>
        <div>
            <label>
            Password
            </label>
            <input type='password' value={password} onChange={this.passwordHandler}></input>
        </div>
        <div>
            <label>
            Skill
            </label>
            <select value={skill} onChange={this.skillHandler}>
                <option>select an option</option>
                <option>Web development</option>
                <option>Android Development</option>
                <option>Software Engineer</option>
                <option>Dolly Chai Wala</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
