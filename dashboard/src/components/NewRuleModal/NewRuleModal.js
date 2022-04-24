import React, { Component } from 'react';

import { Button, Modal, Form, FormGroup } from "react-bootstrap";

import "./NewRuleModal.scss"

export default class NewRuleModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  render() {
    return (
      <Modal show={true} onHide={this.props.closeModal}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>New SWRL Rule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Rule Name</Form.Label>
              <Form.Control placeholder="New Rule" />
              <Form.Text className="text-muted">
                A human readable label for your rule
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Rule</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
    </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
          <Button variant="primary" onClick={this.addRule}>Add</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
    );
  }
}
