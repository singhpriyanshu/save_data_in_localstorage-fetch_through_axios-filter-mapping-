import React, { Component } from 'react'

export class Signup extends Component {
    state = {
        user: '',
        Password:'',
        rememberMe: false
      };
     
      handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
      };
     
      handleFormSubmit = () => { 
      const { user,Password, rememberMe } = this.state;
      localStorage.setItem('rememberMe', rememberMe);
      localStorage.setItem('user', rememberMe ? user : '');
      localStorage.setItem('Password', rememberMe ? Password : '');};
    
      // change=()=>{
      //   this.props.history.push("/Country");
      //   }

      render() {
        return (
            <div class="jumbotron" style={{paddingTop:"5px"}}>
            <div    style={{paddingLeft:"40px",marginTop:"10px"}}>
      <form onSubmit={this.handleFormSubmit}>
      <label>
        User: 
      <input name="user" value={this.state.user} onChange={this.handleChange}/>
      </label> <br/>
      <label>
      <label>
        Password: 
      <input name="Password"  value={this.state.Password} onChange={this.handleChange}/>
      </label> <br/>
      <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
      </label><br/>
      <button type="submit" class="btn btn-warning"
      //  onClick={this.change}
      >Sign In</button>
      </form>
    
  


            </div>
            </div>
        )
    }
}

export default Signup
