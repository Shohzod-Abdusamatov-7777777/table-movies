import { Component } from "react";
import Joi from "joi-browser";


class Form extends Component {
  //   validate
  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validatePropery = (name, value, schema) => {
    const obj = {
      [name]: value,
    };
    const fieldSchema = {
      [name]: schema[name],
    };
    //return result
    const { error } = Joi.validate(obj, fieldSchema);
    return error ? error.details[0].message : null;
  };
  //   submit form
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return null;
  };

  //   input change value
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validatePropery(
      input.name,
      input.value,
      this.schema
    );
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

}

export default Form;
