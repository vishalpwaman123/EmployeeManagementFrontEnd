import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../StyleCss/StyleR.scss';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const nameRegrex = RegExp( /^[a-zA-Z]$/ );

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      FirstName: null,
      LastName: null,
      Email: null,
      Password: null,
      Gender: null,
      PhoneNumber: null,
      City: null,

      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmedPassword: "",
        gender: "",
        phoneNumber: "",
        city: ""
      }
    }
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Invalid Email Address";
        break;

      case "password":

        formErrors.password = value.length < 6 ? "Min 6 Characaters Required" : "";
        break;

      case "firstName":
        if( !nameRegrex.test(value) ) {
          formErrors.firstName = "Name must alphabetic Required " ;
          break;
        } 
        formErrors.firstName = value.length < 3 ? "Min 3 Characaters Required" : "";
        break;

      case "lastName":
        if( !nameRegrex.test(value) ) {
          formErrors.lastName = "Name must alphabetic Required " ;
          break;
        }
        formErrors.lastName = value.length < 3 ? "Min 3 Characaters Required" : "";
        break;

      case "gender":
        formErrors.gender = value.length < 4 ? "Invalid Gender" : "";
        break;

      case "city":

        formErrors.city = value.length < 2 ? "Min 2 Characters" : "";
        break;

      case "phoneNumber":
        formErrors.phoneNumber = value.length == 10 ? "" : "Please Enter Valid Mobile Number ";
        break;

      case "confirmedPassword":
        formErrors.confirmedPassword = value.length < 10 ? "Min 6 Characaters Required" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  render() {

    const { formErrors } = this.state;

    return (
      <div class="login-box" onSubmit={this.mySubmitHandler}>
        <form class="containers">
          <h2 class="title" align="center">REGISTER</h2>
          <Grid container spacing={5}>

            <Grid item xs={6} >
              <div className="texts">
                <TextField
                  className1={formErrors.firstName.length > 0 ? "error" : null}
                  type="text"
                  name="firstName"
                  id="outlined-basic"
                  label="First Name" variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.FirstName}
                />
                <div className="error">
                  {formErrors.firstName.length > 0 && (
                    <span className1="errorMessage">{formErrors.firstName}</span>
                  )}
                </div>
              </div>
            </Grid>


            <Grid item xs={6}>
              <div className="texts">
                <TextField
                  className1={formErrors.lastName.length > 0 ? "error" : null}
                  type="text"
                  name="lastName"
                  id="outlined-basic"
                  label="Last Name" variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.LastName}
                />
                <div className="error">
                  {formErrors.lastName.length > 0 && (
                    <span className1="errorMessage">{formErrors.lastName}</span>
                  )}
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="texts">
                <TextField
                  className1={formErrors.gender.length > 0 ? "error" : null}
                  type="text"
                  name="gender"
                  id="outlined-basic"
                  label="Gender" variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.Gender}
                  placeholder="eg. male / female"
                />
                <div className="error">
                  {formErrors.gender.length > 0 && (
                    <span className1="errorMessage">{formErrors.gender}</span>
                  )}
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="texts">
                <TextField
                  className1={formErrors.phoneNumber.length > 0 ? "error" : null}
                  type="text"
                  name="phoneNumber"
                  id="outlined-basic"
                  label="Phone Number" variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.PhoneNumber}
                />
                <div className="error">
                  {formErrors.phoneNumber.length > 0 && (
                    <span className1="errorMessage">{formErrors.phoneNumber}</span>
                  )}
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="texts">
                <TextField
                  className1={formErrors.email.length > 0 ? "error" : null}
                  type="email"
                  name="email"
                  id="outlined-basic"
                  label="Email ID" variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.EmailID}
                />
                <div className="error">
                  {formErrors.email.length > 0 && (
                    <span className1="errorMessage">{formErrors.email}</span>
                  )}
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="texts">
                <TextField
                  className1={formErrors.city.length > 0 ? "error" : null}
                  type="text"
                  name="city"
                  id="outlined-basic"
                  label="City" variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.City}
                />
                <div className="error">
                  {formErrors.city.length > 0 && (
                    <span className1="errorMessage">{formErrors.city}</span>
                  )}
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="texts">
                <TextField
                  className1={formErrors.password.length > 0 ? "error" : null}
                  type="Password"
                  name="password"
                  id="outlined-basic"
                  label="Password" variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.Password}
                />
                <div className="error">
                  {formErrors.password.length > 0 && (
                    <span className1="errorMessage">{formErrors.password}</span>
                  )}
                </div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="texts">
                <TextField
                  className1={formErrors.password.length > 0 ? "error" : null}
                  type="Password"
                  name="confirmedPassword"
                  id="outlined-basic"
                  label="Confirm Password" variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.Password}
                />
                <div className="error">
                  {formErrors.confirmedPassword.length > 0 && (
                    <span className1="errorMessage" >{formErrors.confirmedPassword}</span>
                  )}
                </div>
              </div>
            </Grid>

            < Grid item xs={12} className="footer">
              <div className="btn">
                <Button
                  onsubmit="validateForm()"
                  variant="contained"
                  type="button"
                  onClick={this.handleChange}
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