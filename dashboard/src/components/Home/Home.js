import React, { Component } from 'react';
import './Home.scss'

export default class Home extends Component {

  render() {
    return (
      <div className="home-body">
          <p className="reason-title">Cloud Based SWRL Editing & Reasoning</p>
          <p className="reason-description">SWRLEdit is a cloud-based application for creating and executing SWRL Rules and SQWRL queries.</p>
          <p>Supported reasoners include</p>
          <ul>
            <li>Apache Jena</li>
            <li>Stardog</li>
            <li>HermiT</li>
            <li>Openllet</li>
          </ul>
          <a href="/reason" className="btn btn-primary get-started">Get Started</a>
      </div>
    );
  }
}
