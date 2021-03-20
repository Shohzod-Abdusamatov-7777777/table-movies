import React from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Form from "./common/Form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(6).max(30),
    password: Joi.string().required().min(3).max(30),
  };



  render() {
    return (
      <div style={{ paddingTop: "100px" }} className="container">
        <h1 className="mb-4">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            type="text"
            label="Username"
            value={this.state.data.username}
            onChange={this.handleChange}
            error={this.state.errors.username}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            value={this.state.data.password}
            onChange={this.handleChange}
            error={this.state.errors.password}
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validate()}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
