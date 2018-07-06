import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
const appRoot = document.getElementById('portal');
const styles = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  // background: 'url("https://assets.epix.com/f57d1ab311eac2ffaa24ed661d627b4b.jpg")'
};
// const canvas = document.getElementById('blur');
// const ctx = canvas.getContext('2d');
// ctx.filter = 'blur(15px)';
// ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
// ctx.lineWidth = 5;
// ctx.stroke();


class CanvasBlur extends Component {
  constructor() {
    super();
    this.div = document.createElement('div');
    console.log('this.div: ', this.div)
  }
  componentDidMount() {
    appRoot.appendChild(this.div);
  }

  componentWillUnmount() {
    appRoot.removeChild(this.div);
  }

  render() {
    return (
      <Fragment>
        <svg height='99vh' width='100vw' style={{overflow: 'hidden'}}>
		  <defs>
			<filter id="f10">
			  <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
			</filter>
		  </defs>
		  <image x="0"
                 width="100vw"
                 height="100vh"
				 filter="url(#f10)"
                 href="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/>
        </svg>
	  </Fragment>
    )
  }
}
export { CanvasBlur }

const SVG = () => (
	<svg height="400" width="400">
	  <defs>
		<filter id="f10" x="0" y="0">
		  <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
		</filter>
	  </defs>
	  <rect width="400" height="400" stroke="black" strokeWidth="30" fill="transparent" filter="url(#f10)" />
	</svg>
);