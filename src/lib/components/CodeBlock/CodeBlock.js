import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import dedent from 'dedent-js';
import pretty from 'pretty';
import './CodeBlock.scss';

const CodeBlock = (props) => {
  let code = props.children;
  const mod = props.modifier;

  if (typeof code === 'string') {
    code = dedent(code);
  } else {
    code = pretty(ReactDOMServer.renderToStaticMarkup(code), { ocd: true });
  }

  if (mod === 'numbered') {
    const codeArray = code.split(/\r?\n/);
    code = codeArray.map((line, i) => (
      <span key={line} className="code-line">{ codeArray[i] }</span>
    ));
  }

  return (
    <pre className={mod ? `p-code-${mod}` : null}>
      <code>
        { code }
      </code>
    </pre>
  );
};

CodeBlock.defaultProps = {
  children: '',
  modifier: '',
};

CodeBlock.propTypes = {
  children: PropTypes.node,
  modifier: PropTypes.string,
};

CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;
