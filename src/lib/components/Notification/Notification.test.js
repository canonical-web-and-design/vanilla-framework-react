import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Notification from './Notification';

describe('Notification component', () => {
  it('should render a default Notification', () => {
    const notification = ReactTestRenderer.create(
      <Notification>
        This is a default Notification
      </Notification>);
    const json = notification.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a status if prop is provided', () => {
    const notification = ReactTestRenderer.create(
      <Notification status="Status:">
        This is a Notification with a status
      </Notification>);
    const json = notification.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an action if prop is provided', () => {
    const notification = ReactTestRenderer.create(
      <Notification action={{ value: 'Action', href: '#' }}>
        This is a Notification with an action
      </Notification>);
    const json = notification.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an information Notification', () => {
    const notification = ReactTestRenderer.create(
      <Notification information>
        This is an information Notification
      </Notification>);
    const json = notification.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a positive Notification', () => {
    const notification = ReactTestRenderer.create(
      <Notification positive>
        This is a positive Notification
      </Notification>);
    const json = notification.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a caution Notification', () => {
    const notification = ReactTestRenderer.create(
      <Notification caution>
        This is a caution Notification
      </Notification>);
    const json = notification.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a negative Notification', () => {
    const notification = ReactTestRenderer.create(
      <Notification negative>
        This is a negative Notification
      </Notification>);
    const json = notification.toJSON();
    expect(json).toMatchSnapshot();
  });
});

