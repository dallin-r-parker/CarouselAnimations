import React, { Component } from "react";
import BlackBoxAnimated from "./BlackBoxAnimated";
import Carousel from "./Carousel";
import styled from "styled-components";
import CSSanimation from "./CSSanimations";

class App extends Component {
  constructor() {
    super();

    this.state = { animatedClass: null };
  }

  handleAnimation(evt) {
    this.setState({ animateClass: "input-focused" });
  }
  handleBlur() {
    this.setState({ animateClass: null });
  }

  render() {
    return (
      <React.Fragment>
        <Carousel />
        <Carousel />
      </React.Fragment>
    );
  }
}

export default App;

// const AppContainer = styled.div`
//   filter: blur(10px);
//   position: absolute;
//   z-index: -55;
//   width: 1920px;
//   height: 710px;
//   background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #f48024);
// `;
