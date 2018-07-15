import React, { Component } from 'react'
import { Observable, Scheduler, interval } from 'rxjs';

class BallAnimation extends Component {
  constructor() {
    super();
    this.lerp = this.lerp.bind(this);
    // this.$animation = interval(0, Scheduler.animationFrame)
    // this.$smoothMove = this.$animation.withLatestFrom(this.$smoothMove, (frame, move) => move);
  }
  styles = {
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    background: 'red'
  }

  lerp(start, end) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;

    return {
      x: start.x + dx * 0.1,
      y: start.y + dy * 0.1,
    };
  }

  render() {
    return (
      <div id='move' style={this.styles}>
      </div>
    )
  }
}

export { BallAnimation }
