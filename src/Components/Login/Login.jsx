import React from "react";
import "../Login/Style.scss";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      Email: null,
      Password: null,

      formErrors: {
        email: "",
        password: ""
      }
    }
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
        break;

      case "password":
        formErrors.password = value.length < 6 ? "minimum 6 characaters required" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {

    const { formErrors } = this.state;

    return (
      <form className="container">
        <h2 className="title" align="center">LOGIN</h2>
        <div className="text">
          <TextField
            className1={formErrors.email.length > 0 ? "error" : null}
            type="email"
            name="email"
            value={this.state.Email}
            onChange={this.handleChange}
            label="Email Id" variant="outlined"
            title="Email Id is required" required />
        </div>
        <div className="error">
        {formErrors.email.length > 0 && (
            <span className1="errorMessage">{formErrors.email}</span>
          )}
        </div>
        <div className="text">
          <TextField
            className1={formErrors.password.length > 0 ? "error" : null}
            type="Password"
            name="password"
            onChange={this.handleChange}
            value={this.state.Password}
            label="Password" variant="outlined"
            required />
        </div>
        <div className="error">
        {formErrors.password.length > 0 && (
            <span className1="errorMessage" >{formErrors.password}</span>
          )}
        </div>
        <Grid item xs={12} className="footers">
          <div className="btn">
            <Button
              variant="contained"
              type="button"
              color="primary"
              onClick={e => this.onSubmit(e)}
              className="btn"> Login </Button>
          </div>
          <div >
            <Link to="/register" onClick={this.register}>
              <p><h4>Register (I don't have account)</h4></p></Link>
          </div>
        </Grid>
      </form>
    );
  }
}


