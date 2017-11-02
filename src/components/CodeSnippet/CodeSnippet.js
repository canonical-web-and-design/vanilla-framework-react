import React from 'react';
import PropTypes from 'prop-types';
import './CodeSnippet.css';

class CodeSnippet extends React.Component {
  render() {
    return (
      <div className="p-code-snippet">
        <input className="p-code-snippet__input" value={this.props.value} readOnly="readonly" />
        <button className="p-code-snippet__action">Copy to clipboard</button>
      </div>
    );
  }
}

CodeSnippet.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CodeSnippet;
