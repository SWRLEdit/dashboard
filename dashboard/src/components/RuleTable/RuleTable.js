import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { CloseButton } from 'react-bootstrap'

export default class RuleTable extends Component {

  constructor(props) {
    super(props);
    this.removeRule = this.removeRule.bind(this);
    this.data = [
      {
        id: 1,
        Name: 'rule 1',
        Rule: 'A(?) -> B(?)',
      },
      {
        id: 2,
        Name: 'rule 2',
        Rule: 'B(?) -> C(?)',
      },
    ];
  }

  /**
   * Removes a file from the row an deletes it from the server
   * 
   * @param {*} e The event fired from clicking the button. Contains the button ID
   */
  removeRule(e) {
    console.log("Removed rule", e.target.id);
    this.data = this.data.filter(function (el) { return el.id != e.target.id; });
    console.log(this.data)
  }


  render() {
    const columns = [
      {
        name: 'Name',
        selector: row => row.Name,
      },
      {
        name: 'Rule',
        selector: row => row.Rule,
      },
      {
        name: 'Remove',
        selector: row => row.Enabled,
        cell: row => (
          <CloseButton aria-label="Remove" id={row.id} onClick={(e) => this.removeRule(e)} />
        )
      },
    ];

    return (
      <div>
        <DataTable
          columns={columns}
          data={this.data}
          title="SWRL Rules"
          highlightOnHover
        />
      </div>
    )
  }

}