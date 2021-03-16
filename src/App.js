import { getMovies } from "./services/fakeMovieService";
import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import Navbar from "./components/common/Navbar";
import MovieForm from "./components/movieForm";

function App() {
  // get movies from server
  const [movies, setMovies] = useState(getMovies());

  // delete movie
  const handleDelete = (movie) => {
    const filterMovies = movies.filter((m) => m._id !== movie._id);
    setMovies(filterMovies);
  };

  // movie liked
  const handleLiked = (movie) => {
    const filterMovies = [...movies];
    const index = movies.indexOf(movie);
    filterMovies[index] = { ...movie };
    filterMovies[index].liked = movie.liked ? !movie.liked : true;
    setMovies(filterMovies);
  };

  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route
            path="/movies"
            render={() => (
              <Movies
                movies={movies}
                handleDelete={handleDelete}
                handleLiked={handleLiked}
              />
            )}
          />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect  from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
