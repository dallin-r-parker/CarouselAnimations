// @flow
//! look into adding flow-typed for 3rd party libs
import * as React from 'react';

type Props = {
  height?: string,
  width?: string,
  bgColor?: Array<string>,
  content?: Object
}

class Placeholder extends React.Component<Props> {
  render() {
    return (
      <div>
        Hello Everyone
      </div>
    )
  }
};
export default Placeholder;