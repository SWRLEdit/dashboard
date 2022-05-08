import React, { Component } from 'react';

import { Button, Modal, Form } from "react-bootstrap";

import "./NewRuleModal.scss"

export default class NewRuleModal extends Component {

  constructor(props) {
    super(props);
    // The state keeps track of the rule name and the rule itself
    this.state = {
      ruleName: '',
      rule: ''
    };
  }

  /**
   * Called when the user attempts to add a new SWRL rule. It packages the
   * input from the modal an passes it to the parent component.
   * @param {*} event The click event
   */
  onAddRule(event) {
    this.props.addRule(this.state);
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
              <Form.Group className="mb-3">
                <Form.Label>Rule Name</Form.Label>
                <Form.Control placeholder="New Rule"
                  value={this.state.ruleName}
                  onChange={e => this.setState({ ruleName: e.target.value })} />
                <Form.Text className="text-muted">
                  A human readable label for your rule
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rule</Form.Label>
                <Form.Control as="textarea" rows={3}
                onChange={e => this.setState({ rule: e.target.value })} />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
            <Button variant="primary" onClick={(e) => this.onAddRule(e)}>Add</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}
