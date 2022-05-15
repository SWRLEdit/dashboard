import React, { Component } from 'react';
import './Footer.scss'

export default class Home extends Component {

  render() {
    return (
      <div className="footer">
        <p className="footer-text footer-name">SWRLEdit</p>
        <p className="footer-text footer-date">{(new Date().getFullYear())}</p>
      </div>
    );
  }
}
