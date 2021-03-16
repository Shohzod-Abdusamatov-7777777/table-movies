import React from "react";
import Movie from "./Movie";
import { FaSortDown, FaSortUp } from "react-icons/fa";

const MoviesTable = (props) => {
  const {
    sorted,
    handleDelete,
    onSort,
    handleLiked,
    currentPage,
    pageSize,sortColumn
  } = props;

  const renderSortIcon=(column) =>{
      if(column!==sortColumn.path) return null;
      if(sortColumn.order==="asc") return <FaSortUp/>;
      return <FaSortDown/>
  }

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th onClick={() => onSort("title")} className="align-middle">
              Title {renderSortIcon("title")}
            </th>
            <th onClick={() => onSort("genre.name")} className="align-middle">
              Genre {renderSortIcon("genre.name")}
            </th>
            <th
              onClick={() => onSort("numberInStock")}
              className="text-center align-middle"
            >
              
              Stock {renderSortIcon("numberInStock")}
            </th>
            <th
              onClick={() => onSort("dailyRentalRate")}
              className="text-center align-middle"
            >
              Rate {renderSortIcon("dailyRentalRate")}
            </th>
            <th className="text-center align-middle"></th>
            <th className="text-center align-middle"></th>
          </tr>
        </thead>
        <tbody>
          {sorted
            .slice((currentPage - 1) * pageSize, pageSize * currentPage)
            .map((movie, index) => (
              <Movie
                key={index}
                movie={movie}
                onDelete={handleDelete}
                onLiked={handleLiked}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesTable;
