import React from "react";
import Header from "./components/Header.js";
import "./App.css";
import Movie from "./components/Movie";
import SectionTitle from "./components/SectionTitle";
import axios from "axios";

import Button from "./components/Button";

class App extends React.Component {
  state = {
    selectedTab: "popular",
    movies: []
  };

  getMovies = type => {
    /* console.log("axios"); */
    axios
      .get("https://api-allocine.herokuapp.com/api/movies/" + type)
      .then(response => {
        this.setState({
          movies: response.data.results,
          selectedTab: type
        });
      });
  };

  render() {


    return (
      <div>
        <Header />
        <div className="wrapper">
          <div className="section">
            {/*  <button onClick={() => this.getMovies("popular")}>
              <SectionTitle text="Popular Movies" />
            </button> */}
            <Button
              getMovies={this.getMovies}
              type="popular"
              text="Popular Movies"
              buttonIsActive={
                this.state.selectedTab === "popular" ? true : false
              }
              // si le selectedTab est egal a mon type alors le bouton est actif
            />
            <Button
              getMovies={this.getMovies}
              type="upcoming"
              text="Upcoming"
              buttonIsActive={
                this.state.selectedTab === "upcoming" ? true : false
                //si le selectedTab est egal a "upcoming", alors la prop buttonIsActive est true sinon false
              }
            />
            <Button
              getMovies={this.getMovies}
              type="top_rated"
              text="Top Rated"
              buttonIsActive={
                this.state.selectedTab === "top_rated" ? true : false
              }
            />
            {/* <button onClick={() => this.getMovies("upcoming")}>
              {" "}
              <SectionTitle text="Upcoming Movies" />
            </button>
            <button onClick={() => this.getMovies("top_rated")}>
              {" "}
              <SectionTitle text="Top Rated Movies" />
            </button> */}
          </div>
          <Movie items={this.state.movies} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getMovies("popular");
  }
}

export default App;
