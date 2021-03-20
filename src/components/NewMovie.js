import React from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Form from "./common/Form";
import { capitalize } from "lodash";

class NewMovie extends Form {
  movieEdit = this.props.movieEdit ? this.props.movieEdit[0] : "";
  state = {
    data: this.props.movieEdit
      ? {
          _id: this.movieEdit._id,
          title: this.movieEdit.title,
          genre: this.movieEdit.genre.name,
          numberInStock: this.movieEdit.numberInStock,
          rate: this.movieEdit.dailyRentalRate,
        }
      : {
          // _id: this.props.movies[this.props.movies.length - 1]._id + 1,
          _id: this.props.movies.length.toString(),
          title: "",
          genre: "",
          numberInStock: "",
          rate: "",
        },
    errors: {},
  };

  // joi schemas
  schema = {
    title: Joi.string().required().min(3).max(20).label("Title"),
    genre: Joi.string().required(),
    numberInStock: Joi.number().required().min(2).max(10),
    rate: Joi.number().required().min(0).max(10).label("Rate"),
    _id: Joi.required(),
  };

  onSave = () => {
    this.props.handleSave(this.state.data);
    this.setState({
      data: {
        _id: this.props.movies.length.toString(),
        title: "",
        genre: "",
        numberInStock: 0,
        rate: undefined,
      },
    });
    this.props.history.replace("/movies");
  };

  // render
  render() {
    return (
      <div style={{ paddingTop: "100px" }} className='container'>
        <h1 className='mb-4'>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name='title'
            label='Title'
            type='text'
            value={capitalize(this.state.data.title)}
            onChange={this.handleChange}
            error={this.state.errors.title}
          />
          <div className='form-group'>
            <label htmlFor='genre'>Genre:</label>
            <select
              name='genre'
              id='genre'
              className='form-control'
              value={this.state.data.genre}
              onChange={this.handleChange}>
              <option></option>
              <option>Comedy</option>
              <option>Action</option>
              <option>Thriller</option>
            </select>
            {this.state.errors.genre && (
              <div className='alert alert-danger'>
                {this.state.errors.genre}
              </div>
            )}
          </div>
          <Input
            name='numberInStock'
            label='Number In Stock'
            type='number'
            value={this.state.data.numberInStock}
            onChange={this.handleChange}
            error={this.state.errors.numberInStock}
          />
          <Input
            name='rate'
            label='Rate'
            type='text'
            value={this.state.data.rate}
            onChange={this.handleChange}
            error={this.state.errors.rate}
          />
          <button
            type='submit'
            className='btn btn-primary'
            disabled={this.validate()}
            onClick={this.onSave}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default NewMovie;
