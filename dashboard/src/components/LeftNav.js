import React, { Component } from 'react';
import { Nav, Tab } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import Ontology from './Ontology'
import SWRLRules from './SWRLRules'
import Reason from './Reason'
import './LeftNav.scss'


export default class LeftNav extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="onto">Ontologies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="swrl">SWRL Rules</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reason">Reason</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="onto">
                  <Ontology />
                </Tab.Pane>
                <Tab.Pane eventKey="swrl">
                  <SWRLRules/>
                </Tab.Pane>
                <Tab.Pane eventKey="reason">
                  <Reason/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}