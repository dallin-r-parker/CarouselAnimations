import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "normalize.css";

ReactDOM.render(<App />, document.getElementById("root"));

// import React, { Component } from "react";
// import BlackBoxAnimated from "./BlackBoxAnimated";
// import Carousel from "./Carousel";
// import styled from "styled-components";
// import CSSanimation from "./CSSanimations";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = { animatedClass: null };
//   }

//   handleAnimation(evt) {
//     this.setState({ animateClass: "input-focused" });
//   }
//   handleBlur() {
//     this.setState({ animateClass: null });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Wrapper>
//           <ImageBox>
//             <BlackBoxAnimated
//               reverseDirection={true}
//               heightPercent={20}
//               startAnimation={true}
//             />
//             <BlackBoxAnimated
//               reverseDirection={false}
//               heightPercent={30}
//               startAnimation={false}
//             />
//             <BlackBoxAnimated
//               reverseDirection={true}
//               heightPercent={30}
//               startAnimation={true}
//             />
//             <BlackBoxAnimated
//               reverseDirection={false}
//               heightPercent={20}
//               startAnimation={false}
//             />
//           </ImageBox>
//         </Wrapper>
//         <CSSanimation
//           animateClass={this.state.animateClass}
//           focused={this.handleAnimation.bind(this)}
//           blurred={this.handleBlur.bind(this)}
//         />

//       </React.Fragment>
//     );
//   }
// }

// export default App;

// const Wrapper = styled.div``;

// const ImageBox = styled.div`
//   background: red;
//   width: 500px;
//   height: 400px;
// `;
