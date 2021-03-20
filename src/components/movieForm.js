import React from "react";
import Form from "./common/Form";
import NewMovie from "./NewMovie";

class MovieForm extends Form {
  render() {
    const { match, history, movieEdit, movies,handleSave } = this.props;
    return (
      <NewMovie
        match={match}
        history={history}
        movies={movies}
        movieEdit={movieEdit}
        handleSave={handleSave}
      />
    );
  }
}

export default MovieForm;
