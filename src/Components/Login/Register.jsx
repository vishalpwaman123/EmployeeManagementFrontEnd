import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName : "",
      FirstNameError : "",
      LastName : "",
      LastNameError : "",
      Email: "",
      EmailError : "",
      Gender : "",
      GenderError : "",
      Password: "",
      PasswordError :"",
      PhoneNumber : "",
      PhoneNumberError : "",
      City :"",
      CityError : ""

    }
  }

  register = (e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Gender: this.state.Gender,
      EmailID: this.state.EmailID,
      City: this.state.City,
      Password: this.state.Password
    }

  }
  render() {
    return (
      <div class="login-box">
        <form class="container">
          <h2 class="title" align="center">REGISTER</h2>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <TextField
                type="text"
                id="outlined-basic"
                label="First Name" variant="outlined"
                onChange={this.handleChange}
                value={this.state.FirstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Last Name" variant="outlined"
                onChange={this.handleChange}
                value={this.state.LastName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Gender" variant="outlined"
                onChange={this.handleChange}
                value={this.state.Gender}
                placeholder="eg. male / female"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Phone Number" variant="outlined"
                onChange={this.handleChange}
                value={this.state.PhoneNumber}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="email"
                id="outlined-basic"
                label="Email ID" variant="outlined"
                onChange={this.handleChange}
                value={this.state.EmailID}
              />
            </Grid>
            <Grid item xs={6}>

              <TextField
                type="text"
                id="outlined-basic"
                label="City" variant="outlined"
                onChange={this.handleChange}
                value={this.state.City}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="Password"
                id="outlined-basic"
                label="Password" variant="outlined"
                onChange={this.handleChange}
                value={this.state.Password}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="Password"
                id="outlined-basic"
                label="Confirm Password" variant="outlined"
                onChange={this.handleChange}
                value={this.state.Password}

              />
            </Grid>

            < Grid item xs={12} className="footer">
              <div className="btn">
                <Button
                  variant="contained"
                  type="button"
                  onClick={this.register}
                  color="primary"
                  className="btn btn-success">Register
              </Button>
              </div>
              <div className="">
                <Link to="/">
                  <h4>Login</h4>
                </Link>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}