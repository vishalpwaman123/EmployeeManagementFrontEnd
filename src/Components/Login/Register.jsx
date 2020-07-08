import React from "react";
import Grid from '@material-ui/core/Grid';

import {Link } from "react-router-dom";
export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      FirstName:'',
      LastName:'',
      Gender:'',
      EmailID:'',
      City:'',
      Password:''
     
    }
  }
  
  handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    
  }  

  register=(e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData ={
      FirstName:this.state.FirstName,
      LastName:this.state.LastName,
      Gender:this.state.Gender,
      EmailID:this.state.EmailID,
      City:this.state.City,
      Password:this.state.Password
    }

  }
  render() 
  {
  return (
  <div class="login-box">
  <fieldset>
      <form  class="container">
        <h2 class="title" align="center">REGISTER</h2>
         <Grid container spacing={5}>
            <Grid item xs={6}>
            First Name
            <input type="text" name="firstname" onChange={this.handleChange} value={this.state.FirstName} placeholder="eg. vishal " />
            </Grid>
            <Grid item xs={6}>
            Last Name
            <input type="text" name="lastname" onChange={this.handleChange} value={this.state.LastName} placeholder="eg. wamankar" />
            </Grid>
            <Grid item xs={6}>
            Gender
            <input type="text" name="Gender" onChange={this.handleChange} value={this.state.Gender} placeholder="eg. male / female" />
            </Grid>
            <Grid item xs={6}>
            Phone Number
            <input type="text" name="number" onChange={this.handleChange} value={this.state.PhoneNumber} placeholder="eg. 7758030000" />
            </Grid>
            <Grid item xs={12}>
             Email ID
              <input type="text" name="EmailID" onChange={this.handleChange} value={this.state.EmailID} placeholder="eg. something@gmail.com" />
             </Grid>
             <Grid item xs={6}>
              City
              <input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="eg. Amche pune" />
              </Grid>
              <Grid item xs={6}>
              Password
            <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="password" />         
            </Grid>
               <div className="footer" align="center">
              <button type="button" onClick={this.register} className="btn btn-success">Register</button>
              <Link to="/"><button type="button" className="btn">Login</button></Link>
            </div>
            </Grid>
        </form>
          </fieldset>
      </div>
    );
  }
}