import React from 'react';
import PropTypes from 'prop-types';
import './CodeNumbered.css';

const CodeNumbered = props => {
  const lines = props.lines.map((lines, i) => {
    return (
      <span key={i} className="code-line">{ props.lines[i] }</span>
    );
  });

  return (
    <pre className="p-code-numbered">
      <code>
        { lines }
      </code>
    </pre>
  );
}

CodeNumbered.propTypes = {
  lines: PropTypes.array.isRequired,
};

export default CodeNumbered;
