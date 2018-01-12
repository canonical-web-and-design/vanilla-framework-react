import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Button from './Button';

describe('<Button>', () => {
  it('should render a simple Button correctly', () => {
    const button = ReactTestRenderer.create(
      <Button value="Submit" />);
    const json = button.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a modified Button correctly', () => {
    const button = ReactTestRenderer.create(
      <div>
        <Button neutral value="Neutral" />
        <Button negative value="Negative" />
        <Button positive value="Positive" />
        <Button brand value="Brand" />
        <Button inline value="Inline" />
        <Button disabled value="Disabled" />
      </div>);
    const json = button.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a button element by default', () => {
    const button = shallow(<Button>Button</Button>);
    expect(button.find('button').hostNodes().length).toBe(1);
    expect(button.find('a').hostNodes().length).toBe(0);
  });

  it('should render an anchor element if href exists', () => {
    const button = shallow(<Button href="/link">Link</Button>);
    expect(button.find('a').hostNodes().length).toBe(1);
    expect(button.find('button').hostNodes().length).toBe(0);
  });

  it('should be the same whether children or value prop is passed through', () => {
    const text = 'Value';
    const buttonChild = shallow(<Button>{text}</Button>);
    const buttonValue = shallow(<Button value={text} />);
    expect(buttonChild.html()).toBe(buttonValue.html());

    const newButtonValue = shallow(<Button value="New Value" />);
    expect(buttonChild.html()).not.toBe(newButtonValue.html());
  });

  it('calls onClick if it exists', () => {
    const onClick = jest.fn();
    const button = mount(<Button onClick={onClick}>onClick test</Button>);

    button.find('button').hostNodes().simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('does not call onClick if it exists and is disabled', () => {
    const onClick = jest.fn();
    const button = mount(<Button disabled onClick={onClick}>onClick test</Button>);

    button.find('button').hostNodes().simulate('click');
    expect(onClick).not.toHaveBeenCalled();
  });
});

