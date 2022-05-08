import React, { Component } from 'react';
import { Button } from "react-bootstrap";

import OntoUploadModal from '../OntoUploadModal/OntoUploadModal'
import DataTable from '../DataTable/DataTable'

export default class Ontology extends Component {

  state = {
    isAboutVisible: false,
  }

  constructor(props) {
    super(props);
    this.openOntoModal = this.openOntoModal.bind(this);
    this.closeOntoModal = this.closeOntoModal.bind(this);
  }

  /**
   * Called when the user clicks the "Upload" button. Shows the ontology modal.
   */
  openOntoModal() {
    this.setState({showModal: true})
  }

  /**
   * Called when the user closes the data upload modal.
   */
   closeOntoModal() {
     console.log("Close called")
    this.setState({showModal: false})
  };

  render(){
    return (
      <div>
        <DataTable />
        { this.state.showModal ? <OntoUploadModal closeModal={this.closeOntoModal} /> : null }
      <Button className="onto-upload-btn" variant="primary" size="lg" onClick={ () => this.openOntoModal()}>
        Add Data
      </Button>{' '}
    </div>
    );
  }
}
