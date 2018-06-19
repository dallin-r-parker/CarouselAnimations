import React, { Component } from "react";
import BlackBoxAnimated from "./BlackBoxAnimated";
import Carousel from "./Carousel";
import styled from "styled-components";
import CSSanimation from "./CSSanimations";

class App extends Component {
  constructor() {
    super();

    this.state = {
      xActiveItem: 0,
      yActiveItem: 0
    }

  }

  handleLeftNav() {
    const { xActiveItem } = this.state;
    this.setState({ xActiveItem: xActiveItem - 1 })
  }

  handleRightNav() {
    const { xActiveItem } = this.state;
    this.setState({ xActiveItem: xActiveItem + 1 })
  }

  // handleUpNav() {
  //   const { yActiveItem } = this.state;
  //   this.setState({ yActiveItem: yActiveItem - 1 })
  // }

  // handleDownNav() {
  //   const { yActiveItem } = this.state;
  //   this.setState({ yActiveItem: yActiveItem + 1 })
  // }

  // <BtnNav onClick={this.handleUpNav.bind(this)}>UP</BtnNav>
  // <BtnNav onClick={this.handleDownNav.bind(this)}>DOWN</BtnNav>

  render() {
    return (
      <Carousels>
        <CollectionGenre>
          <Carousel
            xActiveItem={this.state.xActiveItem}
            yActiveItem={this.state.yActiveItem}
            genre={'ADVENTURE'} />
          <BtnWrap>
            <BtnNav onClick={this.handleLeftNav.bind(this)}>LEFT</BtnNav>
            <BtnNav onClick={this.handleRightNav.bind(this)}>RIGHT</BtnNav>
          </BtnWrap>
        </CollectionGenre>
      </Carousels>
    );
  }
}

export default App;

const Carousels = styled.div`
  color: #efefef;
  font-family: Arial;
  background: lightgray;

`;

const BtnWrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: 20%;
`

const BtnNav = styled.button`
  margin-top: 5px;
  width: 130px;
`

const CollectionGenre = styled.h3``;
