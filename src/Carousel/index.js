import React, { Component } from "react";
import { collection } from "../collection";
import styled from "styled-components";

class Carousel extends Component {
  render() {
    return (
      <CarouselContainer>
        {collection.map(({ title, url }, i) => (
          <CarouselWrap key={i}>
            <CarouselImg backgroundUrl={url} />
            <CarouselTitle>{title}</CarouselTitle>
          </CarouselWrap>
        ))}
      </CarouselContainer>
    );
  }
}

export default Carousel;

const CarouselContainer = styled.div`
  padding: 57px;
  display: flex;
  overflow: hidden;
  border: 2px solid green;
  background: black;
`;

const CarouselWrap = styled.div`
  border: 1px solid yellow;
`;

const CarouselTitle = styled.h3`
  font-family: Arial;
  font-weight: 100;
  color: #efefef;
`;

const CarouselImg = styled.div`
  background: url(${({ backgroundUrl }) => backgroundUrl});
  background-size: cover;
  background-position: center;
  height: 197px;
  width: 350px;
  margin-right: 4px;
  box-shadow: 0 2px 100px 0 #000000;
`;
