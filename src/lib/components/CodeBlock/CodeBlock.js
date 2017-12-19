import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import dedent from 'dedent-js';
import pretty from 'pretty';

const CodeBlock = (props) => {
  const { numbered } = props;
  let code = props.children;

  if (typeof code === 'string') {
    code = dedent(code);
  } else {
    code = pretty(ReactDOMServer.renderToStaticMarkup(code), { ocd: true });
  }

  if (numbered) {
    const codeArray = code.split(/\r?\n/);
    code = codeArray.map((line, i) => (
      <span key={line} className="code-line">{ codeArray[i] }</span>
    ));
  }

  return (
    <pre className={numbered ? 'p-code-numbered' : null}>
      <code>
        { code }
      </code>
    </pre>
  );
};

CodeBlock.defaultProps = {
  children: '',
  numbered: false,
};

CodeBlock.propTypes = {
  children: PropTypes.node,
  numbered: PropTypes.bool,
};

CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;
