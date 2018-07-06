import React, {Component} from "react";
import {CanvasBlur} from './Canvas';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


const pixelsPerSeconds = v => ms => v * ms / 1000;

class App extends Component {
	constructor() {
	  super();
	}


	render() {
		return (
			<CanvasBlur/>
		)
	}
}

export default App;