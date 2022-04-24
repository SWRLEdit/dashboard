import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import RuleTable from '../RuleTable/RuleTable'
import NewRuleModal from '../NewRuleModal/NewRuleModal';

export default class SWRL extends Component {

  constructor(props) {
    super(props);
    this.state = {"showModal": false};
    this.openNewRuleModal = this.openNewRuleModal.bind(this);
    this.closeRuleModal = this.closeRuleModal.bind(this);
  }

    /**
   * Called when the new rule modal should be shown to the user.
   */
     openNewRuleModal() {
      this.setState({showModal: true})
    }

     /**
   * Called when the modal should be hidden from the view
   */
   closeRuleModal() {
    console.log("Close called")
   this.setState({showModal: false})
 };

  render(){
    return (
      <div>
        <RuleTable />
        { this.state.showModal ? <NewRuleModal closeModal={this.closeRuleModal} /> : null }
        <Button className="new-swrl-btn" variant="primary" size="lg" onClick={ () => this.openNewRuleModal()}>
        Add Rule
      </Button>{' '}
    </div>
    );
  }
}
