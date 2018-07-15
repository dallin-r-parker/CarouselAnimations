import React, {Component} from "react";
import {CanvasBlur} from './Canvas';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { BallAnimation } from './RxJSAnimation';

const pixelsPerSeconds = v => ms => v * ms / 1000;

class App extends Component {
	constructor() {
	  super();
	}


	render() {
		return (
			<BallAnimation/>
		)
	}
}

export default App;