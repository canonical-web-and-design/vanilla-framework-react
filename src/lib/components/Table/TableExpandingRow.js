import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';
import TableCell from './TableCell';

class TableExpandingRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPanel: false,
    };

    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({
      showPanel: !this.state.showPanel,
    });
  }

  render() {
    const { showPanel } = this.state;
    const { data, children } = this.props;
    const tableRow = (
      <TableRow>
        {data.cellData.map(datum => (
          <TableCell key={`tabel-cell-${datum.content}`} align={datum.align}>{datum.content}</TableCell>
        ))}

        <TableCell align="right">
          <button
            className="u-toggle"
            aria-controls={`toggle-panel-${data.id}`}
            aria-expanded={this.state.showPanel}
            onClick={this.togglePanel}
          >
            {showPanel ? 'Hide' : 'Show'}
          </button>
        </TableCell>
        <td id={`toggle-panel-${data.id}`} className="p-table-expanding__panel" aria-hidden={!this.state.showPanel}>
          {children}
        </td>
      </TableRow>
    );

    return tableRow;
  }
}

TableExpandingRow.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

TableExpandingRow.displayName = 'TableExpandingRow';

export default TableExpandingRow;
