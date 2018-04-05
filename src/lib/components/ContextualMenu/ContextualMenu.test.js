import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ContextualMenu from './ContextualMenu';
import ContextualMenuDropdown from './ContextualMenuDropdown';
import ContextualMenuGroup from './ContextualMenuGroup';

describe('<ContextualMenu>', () => {
  it('should render a simple ContextualMenu correctly', () => {
    const menu = ReactTestRenderer.create(
      <ContextualMenu id="menu">
        <div>Menu</div>
        <ContextualMenuDropdown>
          <a href="#a">Link 1</a>
          <a href="#a">Link 2</a>
          <a href="#a">Link 3</a>
        </ContextualMenuDropdown>
      </ContextualMenu>);
    const json = menu.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render with position prop correctly', () => {
    const menu = ReactTestRenderer.create(
      <div>
        <ContextualMenu id="menu" position="left">
          <div>Menu</div>
          <ContextualMenuDropdown>
            <a href="#a">Link 1</a>
            <a href="#a">Link 2</a>
            <a href="#a">Link 3</a>
          </ContextualMenuDropdown>
        </ContextualMenu>
        <ContextualMenu id="menu" position="center">
          <div>Menu</div>
          <ContextualMenuDropdown>
            <a href="#a">Link 1</a>
            <a href="#a">Link 2</a>
            <a href="#a">Link 3</a>
          </ContextualMenuDropdown>
        </ContextualMenu>
      </div>);
    const json = menu.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render ContextualMenuGroups correctly', () => {
    const menu = ReactTestRenderer.create(
      <ContextualMenu id="menu" position="left">
        <div>Menu</div>
        <ContextualMenuDropdown>
          <ContextualMenuGroup>
            <a href="#a">Link 1</a>
            <a href="#a">Link 2</a>
          </ContextualMenuGroup>
          <ContextualMenuGroup>
            <a href="#a">Link 3</a>
            <a href="#a">Link 4</a>
          </ContextualMenuGroup>
        </ContextualMenuDropdown>
      </ContextualMenu>);
    const json = menu.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should open the ContextualMenu when clicked', () => {
    const menu = shallow(
      <ContextualMenu id="menu">
        <button>Menu</button>
        <ContextualMenuDropdown>
          <a href="#a">Link 1</a>
          <a href="#a">Link 2</a>
          <a href="#a">Link 3</a>
        </ContextualMenuDropdown>
      </ContextualMenu>);

    expect(menu.find('[aria-expanded=true]')).toHaveLength(0);
    expect(menu.find('[aria-hidden=true]')).toHaveLength(1);

    menu.find('button').hostNodes().simulate('click');
    expect(menu.find('[aria-expanded=true]')).toHaveLength(1);
    expect(menu.find('[aria-hidden=true]')).toHaveLength(0);
  });
});
