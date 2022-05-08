import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import RuleTable from '../RuleTable/RuleTable'
import NewRuleModal from '../NewRuleModal/NewRuleModal';

export default class SWRLPage extends Component {

  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.state = {"showModal": false};
    this.openNewRuleModal = this.openNewRuleModal.bind(this);
    this.closeRuleModal = this.closeRuleModal.bind(this);
    this.addRule = this.addRule.bind(this);
  }

    /**
   * Called when the new rule modal should be shown to the user.
   */
     openNewRuleModal() {
      this.setState({showModal: true});
    }

  /**
   * Called when the modal should be hidden from the view
   */
   closeRuleModal() {
   this.setState({showModal: false});
 };

  /**
   * Called when a user adds a new rule through the new rule modal
  */
  addRule(rule) {
    this.childRef.current.addNewRow({
      "name": rule.ruleName,
      "rule": rule.rule
    })

    this.closeRuleModal();
  }

  render(){
    return (
      <div>
        <RuleTable ref={this.childRef} />
        { this.state.showModal ? <NewRuleModal closeModal={this.closeRuleModal} addRule={ (rule) => this.addRule(rule)}/> : null }
        <Button className="new-swrl-btn" variant="primary" size="lg" onClick={ () => this.openNewRuleModal()}>
        Add Rule
      </Button>{' '}
    </div>
    );
  }
}
