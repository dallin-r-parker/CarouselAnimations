import React from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

const BlackBoxAnimated = ({
  startAnimation = false,
  reverseDirection = false,
  heightPercent
}) => (
  <Motion
    defaultStyle={{ scaleX: 1 }}
    style={{ scaleX: spring(startAnimation ? 0 : 1) }}
  >
    {style => (
      <BlackBox
        heightPercent={heightPercent}
        xDirection={reverseDirection ? "left" : "right"}
        style={{
          transform: `scaleX(${style.scaleX})`
        }}
      />
    )}
  </Motion>
);

export default BlackBoxAnimated;

const BlackBox = styled.div`
  background: black;
  width: 100%;
  height: ${({ heightPercent }) => heightPercent}%;
  transform-origin: ${({ xDirection }) => xDirection} center;
`;
