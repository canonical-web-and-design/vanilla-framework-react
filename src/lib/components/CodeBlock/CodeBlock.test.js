import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import CodeBlock from './CodeBlock';

describe('CodeBlock component', () => {
  it('should render one line of code correctly', () => {
    const codeBlock = ReactTestRenderer.create(
      <CodeBlock>
        {'this is a single line of code'}
      </CodeBlock>,
    );
    const json = codeBlock.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render multiple lines of code correctly', () => {
    const codeBlock = ReactTestRenderer.create(
      <CodeBlock>
        {`this is code sample line 1
          this is code sample line 2
          this is code sample line 3`}
      </CodeBlock>,
    );
    const json = codeBlock.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render one line of code correctly with numbered modifier', () => {
    const codeBlock = ReactTestRenderer.create(
      <CodeBlock modifier="numbered">
        {'this is a single line of code'}
      </CodeBlock>,
    );
    const json = codeBlock.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render multiple lines of code correctly with numbered modifier', () => {
    const codeBlock = ReactTestRenderer.create(
      <CodeBlock modifier="numbered">
        {`this is code sample line 1
          this is code sample line 2
          this is code sample line 3`}
      </CodeBlock>,
    );
    const json = codeBlock.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should display a single blank line if component is empty', () => {
    const codeBlock = ReactTestRenderer.create(
      <CodeBlock />,
    );
    const json = codeBlock.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render markup correctly', () => {
    const codeBlock = ReactTestRenderer.create(
      <CodeBlock>
        <head>
          <title>Markup Example</title>
        </head>
        <body>
          <div>This is an example of using markup in the CodeBlock component</div>
          <div>This & should escape</div>
        </body>
      </CodeBlock>,
    );
    const json = codeBlock.toJSON();
    expect(json).toMatchSnapshot();
  });
});
