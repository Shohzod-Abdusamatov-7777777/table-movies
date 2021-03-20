import React from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Form from "./common/Form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  render() {
    return (
      <div style={{ paddingTop: "100px" }} className="container">
        <h1 className="mb-4">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            type="email"
            value={this.state.data.username}
            onChange={this.handleChange}
            error={this.state.errors.username}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            value={this.state.data.password}
            onChange={this.handleChange}
            error={this.state.errors.password}
          />
          <Input
            name="name"
            label="Name"
            type="text"
            value={this.state.data.name}
            onChange={this.handleChange}
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validate()}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
