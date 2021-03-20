import { getMovies } from "./services/fakeMovieService";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Movies from "./components/Movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import Navbar from "./components/common/Navbar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/LoginForm";
import "./App.css";
import RegisterForm from "./components/RegisterForm";

function App() {
  // get movies from server
  const [movies, setMovies] = useState(getMovies());
  // edit movie
  const [movieEdit, setMovieEdit] = useState("");

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

  // set movie edit
  const handleEdit = (movieEdit) => {
    const movie = movies.filter((m) => m._id === movieEdit._id);
    setMovieEdit(movie);
  };

  // save movie
  const handleSave = (movie) => {
    const filterMovies = [...movies];
    const filterMovie = movies.filter((m) => m._id === movie._id)[0];
    const index = movies.indexOf(filterMovie);
    const addMovie = { ...filterMovies[0] };

    if (index !== -1) {
      filterMovies[index]._id = movie._id;
      filterMovies[index].dailyRentalRate = movie.rate;
      filterMovies[index].title = movie.title;
      filterMovies[index].genre.name = movie.genre;
      if (movie.genre === "Action")
        filterMovies[index].genre._id = "5b21ca3eeb7f6fbccd471818";
      if (movie.genre === "Thriller")
        filterMovies[index].genre._id = "5b21ca3eeb7f6fbccd471820";
      if (movie.genre === "Comedy")
        filterMovies[index].genre._id = "5b21ca3eeb7f6fbccd471814";
      filterMovies[index].numberInStock = movie.numberInStock;
      filterMovies[index].liked = false;
    } else {
      addMovie._id = movie._id;
      addMovie.dailyRentalRate = movie.rate;
      addMovie.title = movie.title;
      addMovie.genre.name = movie.genre;

      if (movie.genre === "Action")
        addMovie.genre._id = "5b21ca3eeb7f6fbccd471818";
      if (movie.genre === "Thriller")
        addMovie.genre._id = "5b21ca3eeb7f6fbccd471820";
      if (movie.genre === "Comedy")
        addMovie.genre._id = "5b21ca3eeb7f6fbccd471814";

      addMovie.numberInStock = movie.numberInStock;
      addMovie.liked = false;
      filterMovies.push(addMovie);
    }

    setMovies(filterMovies);
    setMovieEdit("");
  };

  const [search, setSearch] = useState("");
  const [moviesData, setMoviesData] = useState(movies);
  // search movie
  const handleSearch = (searchItem) => {
    setSearch(searchItem);
    const filterMovies = movies.filter((m) =>
      m.title.toUpperCase().includes(searchItem.toUpperCase())
    );
    setMoviesData(filterMovies);
  };
  
  // search useEffect
  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return (
    <Router>
      <Navbar />
      <div className='container-fluid'>
        <Switch>
          <Route
            exact
            path='/movies/new'
            render={({ match, history }) => (
              <MovieForm
                movies={movies}
                movieEdit={movieEdit}
                match={match}
                history={history}
                handleSave={handleSave}
              />
            )}
          />
          <Route
            exact
            path='/movies/:id'
            render={({ match, history }) => (
              <MovieForm
                movies={movies}
                movieEdit={movieEdit}
                match={match}
                history={history}
                handleSave={handleSave}
              />
            )}
          />
          <Route
            exact
            path='/movies'
            render={() => (
              <Movies
                movies={moviesData}
                movieEdit={movieEdit}
                handleDelete={handleDelete}
                handleLiked={handleLiked}
                handleEdit={handleEdit}
                handleSearch={handleSearch}
                search={search}
                setSearch={setSearch}
              />
            )}
          />
          <Route exact path='/customers' component={Customers} />
          <Route exact path='/rentals' component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
          <Redirect exact from='/' to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
