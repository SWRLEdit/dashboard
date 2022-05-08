import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { CloseButton } from 'react-bootstrap'

export default class RuleTable extends Component {

  constructor(props) {
    super(props);
    this.removeRule = this.removeRule.bind(this);
    this.state = {
      "data": [
        {
          id: 1,
          Name: 'rule 1',
          Rule: 'A(?) -> B(?)',
        },
        {
          id: 2,
          Name: 'rule 2',
          Rule: 'B(?) -> C(?)',
        }
      ]
    };
  }

  addNewRow(row) {
    this.setState({
      "data": [...this.state.data, {
        id: this.state.data.length + 1,
        Name: row.name,
        Rule: row.rule
      }]
    });
  }

  /**
   * Removes a rule from the table.
   * 
   * @param {*} e The event fired from clicking the button. Contains the button ID.
   */
  removeRule(e) {
    let newRules = this.state.data.filter(function (el) { 
      return el.id != e.target.id; 
    })

    this.setState({
      "data": newRules
    });
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
          data={this.state.data}
          title="SWRL Rules"
          highlightOnHover
        />
      </div>
    )
  }
}