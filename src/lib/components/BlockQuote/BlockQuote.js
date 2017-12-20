import React from 'react';
import PropTypes from 'prop-types';

const BlockQuote = (props) => {
  if (props.pull) {
    return (
      <blockquote className="p-pull-quote">
        <p>{props.quote}</p>
        <cite className="p-pull-quote__citation">{props.citation}</cite>
      </blockquote>
    );
  }

  return (
    <blockquote>
      <p>
        <span>&quot;</span>{props.quote}<span>&quot;</span>
      </p>
      <p>
        <cite>{props.citation}</cite>
      </p>
    </blockquote>
  );
};

BlockQuote.defaultProps = {
  citation: '',
  pull: false,
};

BlockQuote.propTypes = {
  quote: PropTypes.string.isRequired,
  citation: PropTypes.string,
  pull: PropTypes.bool,
};

BlockQuote.displayName = 'BlockQuote';

export default BlockQuote;
