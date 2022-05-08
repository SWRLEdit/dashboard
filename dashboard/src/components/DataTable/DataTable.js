import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { CloseButton } from 'react-bootstrap'

export default class OntoDataTable extends Component {

  constructor(props) {
    super(props);
    this.removeFile = this.removeFile.bind(this);
    this.state = {
      "data": [
        {
          id: 1,
          Name: 'movies.ttl',
          Size: '10Mb',
        },
        {
          id: 2,
          Name: 'movies.owl',
          Size: '1Mb',
        },
      ]
    }
  }

  /**
   * Removes a file from the row an deletes it from the server
   * 
   * @param {*} e The event fired from clicking the button. Contains the id of the 'x' button that was clicked (used to locate the record)
   */
  removeFile(e) {
    this.setState({"data": this.state.data.filter(function (el) { return el.id != e.target.id; })})
  }


  render() {
    const columns = [
      {
        name: 'Name',
        selector: row => row.Name,
      },
      {
        name: 'Size',
        selector: row => row.Size,
      },
      {
        name: 'Remove',
        selector: row => row.Enabled,
        cell: row => (
          <CloseButton aria-label="Remove" id={row.id} onClick={(e) => this.removeFile(e)} />
        )
      },
    ];

    return (
      <div>
        <DataTable
          columns={columns}
          data={this.state.data}
          title="Data"
          highlightOnHover
        />
      </div>
    )
  }

}