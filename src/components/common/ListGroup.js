import React from "react";

const ListGroup = (props) => {
  const { genres, onItemSelect, selectedItem } = props;

  return (
    <ul className="list-group">
      {genres.length &&
        genres.map((genre, index) => (
          <li
            style={{ cursor: "pointer" }}
            key={index}
            className={
              selectedItem === genre
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(genre)}
          >
            {genre.name}
          </li>
        ))}
    </ul>
  );
};

export default ListGroup;
