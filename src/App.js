import { getMovies } from "./services/fakeMovieService";
import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import GitChange from "./components/common/gitChange";

function App() {
  // get movies from server
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = (movie) => {
    const filterMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(filterMovies);
  };

  const handleLiked = (movie) => {
    const filterMovies = [...movies];
    const index = movies.indexOf(movie);
    filterMovies[index] = { ...movie };
    filterMovies[index].liked = movie.liked ? !movie.liked : true;
    setMovies(filterMovies);
  };

  return (
    <div className="container-fluid">
      <Movies
        movies={movies}
        handleDelete={handleDelete}
        handleLiked={handleLiked}
      />
    <GitChange/>
    <h2>hello from git</h2>
    </div>
  );
}

export default App;
