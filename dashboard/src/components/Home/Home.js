import React, { Component } from 'react';
import LeftNav from '../LeftNav/LeftNav'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'ontology'
    }
  }

  render(){
    return (
      <div>
        <LeftNav />
    </div>
    );
  }
}
