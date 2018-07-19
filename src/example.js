import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    rooms: []
  };

  render() {
    console.log("render");
    if (this.state.rooms.length === 0) {
      return <div>Loading ...</div>;
    } else {
      const roomsToRender = [];
      for (let i = 0; i < this.state.rooms.length; i++) {
        roomsToRender.push(<li key={i}>{this.state.rooms[i].title}</li>);
      }

      return <ul>{roomsToRender}</ul>;
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
    axios.get("https://airbnb-api.now.sh/api/home").then(response => {
      // En appelant setState, deux choses se passent :
      // 1. Modification de l'état
      // 2. La méthode render est appelé de nouveau
      this.setState({
        rooms: response.data.featured
      });
    });
  }
}

export default App;