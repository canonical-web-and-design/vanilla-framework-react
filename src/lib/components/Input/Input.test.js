import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from './Input';
import Label from './Label';

describe('<Input>', () => {
  it('should match the default snapshot', () => {
    const input = ReactTestRenderer.create(
      <Input id="input" />);
    const json = input.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an input tag by default', () => {
    const input = shallow(
      <Input id="input" />,
    );

    expect(input.type()).toBe('input');
  });

  it('should render a select tag if type is "select"', () => {
    const input = shallow(
      <Input id="input" type="select" />,
    );

    expect(input.type()).toBe('select');
  });

  it('should render a textarea tag if type is "textarea"', () => {
    const input = shallow(
      <Input id="input" type="textarea" />,
    );

    expect(input.type()).toBe('textarea');
  });

  it('should render an input tag if type is not a special case', () => {
    const input = shallow(
      <Input id="input" type="password" />,
    );

    expect(input.type()).toBe('input');
  });

  it('should have appropriate validation class if hasValidation prop is true', () => {
    const validationClass = 'p-form-validation__input';
    const input = shallow(
      <Input id="input" hasValidation />,
    );

    expect(input.hasClass(validationClass)).toBe(true);
  });

  it('should accept custom classnames', () => {
    const input = shallow(
      <Input id="input" className="custom-class" />,
    );

    expect(input.hasClass('custom-class')).toBe(true);
  });
});

describe('<Label>', () => {
  it('should match the default snapshot', () => {
    const label = ReactTestRenderer.create(
      <div>
        <Input id="input" />
        <Label htmlFor="input" />
      </div>);
    const json = label.toJSON();
    expect(json).toMatchSnapshot();
  });
});
