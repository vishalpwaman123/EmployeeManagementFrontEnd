import React from "react";
import Grid from '@material-ui/core/Grid';
import "./Update.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

export class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

          FirstName: null,
          LastName: null,
          Email: null,
          Gender: null,
          PhoneNumber: null,
          City: null,
    
          formErrors: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
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
          formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
          break;
  
        case "firstName":
          formErrors.firstName = value.length < 3 ? "minimum 3 characaters required" : "";
          break;
  
        case "lastName":
          formErrors.lastName = value.length < 3 ? "minimum 3 characaters required" : "";
          break;
  
        case "gender":
          formErrors.gender = value.length < 4 ? "gender may be male/female" : "";
          break;
  
        case "city":
          formErrors.city = value.length < 2 ? "eg. Goa" : "";
          break;
  
        case "phoneNumber":
          formErrors.phoneNumber = value.length < 10 ? "Please Enter Valid Mobile Number " : "";
          break; 
  
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
  
      const { formErrors } = this.state;
  
      return (
        <div class="login-box">
          <form class="container">
            <h2 class="title" align="center">UPDATE</h2>
            <Grid container spacing={5}>
              <Grid item xs={6}>
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
              </Grid>
  
              <Grid item xs={6}>
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
              </Grid>
  
              <Grid item xs={6}>
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
              </Grid>
  
              <Grid item xs={6}>
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
              </Grid>
  
              <Grid item xs={6}>
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
              </Grid>
  
              <Grid item xs={6}>
  
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
              </Grid>
              
              < Grid item xs={12} className="footer">
                <div className="btn">
                  <Button
                    variant="contained"
                    type="button"
                    onClick={this.register}
                    color="primary"
                    className="btn btn-success">SUBMIT
                </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      );
    }
}