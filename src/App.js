// @flow
import React, {Component} from "react";
import {CanvasBlur} from './Canvas';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import { BallAnimation } from './RxJSAnimation';
import Placeholder from './Placeholder';
import Toggle from './Toggle';

const pixelsPerSeconds = v => ms => v * ms / 1000;
type Props = {}
class App extends Component<Props> {
	constructor() {
	  super();
	}


	render() {
		return (
				<Toggle>
					<button>Hello</button>
				</Toggle>
		)
	}
}

export default App;