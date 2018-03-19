import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Form from './Form';
import FormControl from './FormControl';
import Input from '../Input/Input';
import Label from '../Input/Label';

describe('<Form>', () => {
  it('should render with "form" tag', () => {
    const form = shallow(<Form>Form</Form>);

    expect(form.type()).toBe('form');
  });

  it('should render children', () => {
    const form = shallow(<Form>Form</Form>);

    expect(form.text()).toBe('Form');
  });

  it('should contain the inline form class if inline prop exists', () => {
    const inlineClass = 'p-form--inline';
    const form = shallow(<Form inline>Form</Form>);

    expect(form.hasClass(inlineClass)).toBe(true);
  });

  it('should contain the stacked form class if inline prop exists', () => {
    const inlineClass = 'p-form--stacked';
    const form = shallow(<Form stacked>Form</Form>);

    expect(form.hasClass(inlineClass)).toBe(true);
  });

  it('should render additional classes', () => {
    const form = shallow(<Form className="class">Form</Form>);

    expect(form.hasClass('class')).toBe(true);
  });

  it('should match snapshot of empty Form', () => {
    const form = ReactTestRenderer.create(
      <Form />);
    const json = form.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should match snapshot of Form with Label and Input', () => {
    const form = ReactTestRenderer.create(
      <Form>
        <Label htmlFor="input">Label</Label>
        <Input id="input" />
      </Form>);
    const json = form.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should match snapshot of Form with FormControl', () => {
    const form = ReactTestRenderer.create(
      <Form>
        <FormControl>
          <Label htmlFor="input">Label</Label>
          <Input id="input" />
        </FormControl>
      </Form>);
    const json = form.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should match snapshot of Form with FormControl and help text', () => {
    const form = ReactTestRenderer.create(
      <Form>
        <FormControl help="help text">
          <Label htmlFor="input">Label</Label>
          <Input id="input" />
        </FormControl>
      </Form>);
    const json = form.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should match snapshot of Form with FormControl and validation', () => {
    const form = ReactTestRenderer.create(
      <Form>
        <FormControl
          validation={{
            status: 'success',
            tag: 'Success: ',
            message: 'Validation message',
          }}
        >
          <Label htmlFor="input">Label</Label>
          <Input id="input" />
        </FormControl>
      </Form>);
    const json = form.toJSON();
    expect(json).toMatchSnapshot();
  });
});
