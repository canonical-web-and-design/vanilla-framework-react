import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Slider from './Slider';

describe('<Slider>', () => {
  it('should match the default snapshot', () => {
    const slider = ReactTestRenderer.create(
      <Slider />);
    const json = slider.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should match the snapshot with showValue prop', () => {
    const slider = ReactTestRenderer.create(
      <Slider showValue />);
    const json = slider.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should match the snapshot with disabled prop', () => {
    const slider = ReactTestRenderer.create(
      <Slider disabled />);
    const json = slider.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render additional classes', () => {
    const slider = shallow(<Slider className="class" />);

    expect(slider.find('div').at(0).children('input').hasClass('class')).toBe(true);
  });

  it('should keep value state below max prop', () => {
    const slider = shallow(<Slider max={2} />);

    slider.setProps({ value: 2 });
    expect(slider.state().value).toEqual(2);

    slider.setProps({ value: 3 });
    expect(slider.state().value).toEqual(2);

    slider.setProps({ max: 3 });
    expect(slider.state().value).toEqual(3);
  });

  it('should keep value state above min prop', () => {
    const slider = shallow(<Slider min={1} />);

    slider.setProps({ value: 1 });
    expect(slider.state().value).toEqual(1);

    slider.setProps({ value: 0 });
    expect(slider.state().value).toEqual(1);

    slider.setProps({ min: 0 });
    expect(slider.state().value).toEqual(0);
  });
});
