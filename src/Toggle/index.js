// @flow

import * as React from 'react';

type ToggleProps = {
  children?: React.Node,
};

type State = {
  show: boolean
}

class Toggle extends React.Component<ToggleProps, State> {
  state = {show: false};
  static defaultProps = {show: false};

  toggle = () => {
    this.setState(prevState => ({show: true}));
  }
  render() {
    const {children} = this.props;
    return (
      <React.Fragment>
        {children({
          show: this.state.show
        })}
      </React.Fragment>
    )
  }
}

export default Toggle;
