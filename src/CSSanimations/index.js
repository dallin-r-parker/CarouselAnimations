import React, { Component } from "react";
import "./style.css";

class CSSanimation extends Component {
  render() {
    const { animateClass, focused, blurred } = this.props;
    return (
      <input
        onFocus={focused}
        onBlur={blurred}
        className={`input ${animateClass ? animateClass : null}`}
      />
    );
  }
}

export default CSSanimation;
