import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    //call server method
    console.log("Submitted user : ", this.state.account.username);
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    console.log("result : ", result);
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    const errors = { ...this.state.errors };
    if (name === "username") {
      if (value.trim() === "") errors[name] = "Username is required.";
      else delete errors[name];
    }
    if (name === "password") {
      if (value.trim() === "") errors[name] = "Password is required.";
      else delete errors[name];
    }
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    const errors = this.validateProperty(input);
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            autoFocus={true}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
