import React, { Component } from 'react';

import { Button, Modal } from "react-bootstrap";
import Dropzone from 'react-dropzone'

import "./OntoUploadModal.scss"

export default class OntoUploadModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  /**
   * Called when the user uploads a data file
   */
  uploadFile() {
    console.log("User uploaded a file");
    this.props.closeModal();
  }

  render() {
    return (
      <Modal show={true} onHide={this.props.closeModal}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Upload RDF Data</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label>
            <p>SWRLEdit supports data in the following formats: </p> <p className="supported-rdf">.owl .ttl .nt .xml .jsonld</p>
          </label>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
              {({getRootProps, getInputProps}) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drop your data files here, or click to open a file browser</p>
                  </div>
                </section>
              )}
            </Dropzone>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>Close</Button>
          <Button variant="primary" onClick={this.uploadFile}>Upload</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
    );
  }
}
