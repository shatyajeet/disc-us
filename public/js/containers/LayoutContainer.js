/**
 * Created by shatyajeet on 08/06/16.
 */

import React from 'react';

import Navbar from '../components/Navbar';

class LayoutContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default LayoutContainer;
