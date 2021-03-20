import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
import SearchBox from "./common/SearchBox";

const Movies = (props) => {
  const { movies,handleSearch,search,setSearch, handleDelete, handleLiked,handleEdit, } = props;
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([
    { name: "All Genres" },
    ...getGenres(),
  ]);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });
 


  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  // page size change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // selected genre item
  const handleItemSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
    setSearch("");
  };

  const handleSort = (path) => {
    const sortColumnCopy = { ...sortColumn };
    if (sortColumnCopy.path === path) {
      sortColumnCopy.order = sortColumnCopy.order === "asc" ? "desc" : "asc";
    } else {
      sortColumnCopy.path = path;
      sortColumnCopy.order = "asc";
    }
    setSortColumn(sortColumnCopy);
  };

  return (
    <React.Fragment>
      <h3 style={{ paddingTop: "60px" }} className="text-center m-2">
        Showing {filtered.length} movies items
      </h3>
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-6 mb-2">
          <ListGroup
            genres={genres}
            selectedItem={selectedGenre}

            onItemSelect={handleItemSelect}
          />
        </div>

        <div className="col">
          {/* new movie button */}
          <Link to="/movies/new">
            <button className="btn btn-primary mb-2">New Movie</button>
          </Link>
          {/* search box */}
          <SearchBox handleSearch={handleSearch} search={search}/>
          {sorted.length ? (
            <div className="table-responsive-sm">
              <MoviesTable
                sorted={sorted}
                handleDelete={handleDelete}
                handleLiked={handleLiked}
                currentPage={currentPage}
                pageSize={pageSize}
                onSort={handleSort}
                sortColumn={sortColumn}
                handleEdit={handleEdit}
              />
            </div>
          ) : (
            <div className="alert alert-warning">
              <strong>malumot yo'q</strong>
            </div>
          )}
          {sorted.length ? (
            <Pagination
              pageSize={pageSize}
              itemsCount={filtered.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movies;
