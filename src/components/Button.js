import React, { Component } from "react";

class Button extends Component {
  render() {
    // la variable activeClass est égale a: si la propriete isActive est a true --> is Active, sinon rien.
    // let activeClass = this.props.isActive ? "isActive" : "";

    let activeClass = "";
    if (this.props.buttonIsActive === true) {
      activeClass = "isActive";
    }
    return (
      <button
        onClick={() => this.props.getMovies(this.props.type)}
        className={`category ${activeClass}`}
        // className={"category " + activeClass }
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
