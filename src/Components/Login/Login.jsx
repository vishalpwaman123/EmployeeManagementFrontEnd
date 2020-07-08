import React from "react";
//import "../Login/Style.scss";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: ''
    }
  }

  render() {
    return (
          <form class="container">
            <h2 class="title" align="center">LOGIN</h2>
            <div className="text">
              <TextField
                type="email"
                id="email"
                onChange={this.handleChange}
                value={this.state.Email}
                label="Email Id" variant="outlined"
                title="Email Id is required" required />
            </div>
            <div className="text">
              <TextField
                type="Password"
                onChange={this.handleChange}
                value={this.state.Password}
                label="Password" variant="outlined"
                required />
            </div>
            <Grid item xs={12} className="footers">
              <div className="btn">
                <Button
                  variant="contained"
                  type="button"
                  color="primary"
                  onClick={this.login}
                  className="btn"> Login </Button>
              </div>
              <div className="btn">
                <Button
                  variant="contained"
                  type="button"
                  color="primary"
                  href="/register"
                  onClick={this.register}
                  className="btn"> Register </Button>
              </div>
            </Grid>
          </form>
    );
  }
}


