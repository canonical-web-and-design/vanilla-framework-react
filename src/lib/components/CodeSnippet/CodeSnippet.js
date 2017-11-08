import React from 'react';
import PropTypes from 'prop-types';
import './CodeSnippet.css';

class CodeSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputClick() {
    this.textInput.select();
  }

  handleButtonClick() {
    this.textInput.select();
    try {
      document.execCommand('copy');
    } catch(err) {
      console.warn('Unable to copy');
    }
  }

  render() {
    return (
      <div className="p-code-snippet">
        <input
          className="p-code-snippet__input"
          value={this.props.value}
          readOnly="readonly"
          onClick={this.handleInputClick}
          ref={(input) => { this.textInput = input; }} />
        <button
          className="p-code-snippet__action"
          onClick={this.handleButtonClick}>Copy to clipboard</button>
      </div>
    );
  }
}

CodeSnippet.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CodeSnippet;
