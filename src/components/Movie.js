import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const { movie, onDelete, onLiked } = props;

  return (
    <tr>
      <td className="align-middle">
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      </td>
      <td className="align-middle">{movie.genre.name}</td>
      <td className="text-center align-middle">{movie.numberInStock}</td>
      <td className="text-center align-middle">{movie.dailyRentalRate}</td>
      <td className="text-center align-middle" onClick={() => onLiked(movie)}>
        <div style={{ cursor: "pointer" }}>
          {movie.liked ? <FaHeart /> : <FaRegHeart />}
        </div>
      </td>
      <td className="text-center align-middle">
        <button className="btn btn-danger" onClick={() => onDelete(movie)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Movie;
