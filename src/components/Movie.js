import React from "react";
// const items = require("../data.json");

function Movie(props) {
  const components = [];
  for (let i = 0; i < props.items.length; i++) {
    let movieReleaseDate = props.items[i].release_date;
    let movieReleaseYear = movieReleaseDate.slice(0, 4);
    let movieReleaseMonth = movieReleaseDate.slice(5, 7);
    let movieReleaseDay = movieReleaseDate.slice(8, 10);
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    movieReleaseDate =
      months[Number(movieReleaseMonth) - 1] +
      " " +
      Number(movieReleaseDay) +
      ", " +
      movieReleaseYear;

    let resume = props.items[i].overview;
    if (props.items[i].overview.length > 200) {
      resume = props.items[i].overview.substr(0, 200) + "...";
    }
    components.push(
      <li key={i}>
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${
            props.items[i].poster_path
          }`}
        />
        <div className="info">
          <p className="title">{props.items[i].title}</p>
          <p className="date">{movieReleaseDate}</p>
          <p className="overview">{resume}</p>
        </div>
      </li>
    );
  }
  return <ul>{components}</ul>;
}

export default Movie;
