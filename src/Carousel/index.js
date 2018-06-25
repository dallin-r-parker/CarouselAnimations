import React, { Component } from "react";
import styled, {keyframes} from "styled-components";

class Carousel extends Component {
  render() {
    const { xActiveItem, collection } = this.props;
    console.log('xActiveItem: ', xActiveItem === 3, typeof xActiveItem, xActiveItem);
	  console.count('Carousel render');
	  //TODO: THE ANIMATION IS RUINED WHEN ADDING/SUBTRACTING BECAUSE (xActiveItem === i) = FALSE
	  //TODO: I need to trigger animation in componentDidUpdate right now it's too late, so when I start removing things
	  // it make it seem like the animation isn't happening.
    return (
      <CarouselContainer>
        {collection.map(({ title, url }, i) => (
          <CarouselCollectionWrap key={i}>
            <CarouselImg src={url} index={(xActiveItem === i)} />
            <CarouselTitle>{title}</CarouselTitle>
          </CarouselCollectionWrap>
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
  background: #7d7d7d;
  height: 322px;
  width: 100%;
`;

const CarouselCollectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const CarouselGenre = styled.h3``;

const CarouselTitle = styled.h3`
  font-weight: 100;
`;

const CarouselImg = styled.img`
  animation: ${({ index }) => index ? `${animateFocusedItem} 0.25s forwards` : `${animateBlurredItem} 0.25s forwards`};
  height: 197px;
  width: 350px;
  margin-right: 4px;
  box-shadow: 0 2px 100px 0 #000000;
  perspective: 1000px;
`;

// const animateFocusedItem = keyframes`
//   from {
//     height: 197px;
//     width: 350px;
//   }
//   to {
//     height: 253px;
//     width: 450px;
//   }
// `;
//
// const animateBlurredItem = keyframes`
//   from {
//     height: 253px;
//     width: 450px;
//   }
//   to {
//     height: 197px;
//     width: 350px;
//   }
// `;

const animateFocusedItem = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2)
  }
`;

const animateBlurredItem = keyframes`
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1)
  }
`;

// const CarouselImg = styled.img`
//   transition: height 0.15s linear;
//   transition: width 0.15s linear;
//   height: ${({index}) => index ? '253px' : '197px'};
//   width: ${({index}) => index ? '450px' : '350px'};
//   margin-right: 4px;
//   box-shadow: 0 2px 100px 0 #000000;
// `;

