import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Modal from './Modal';

describe('Modal component', () => {
  it('should be hidden if show prop is false', () => {
    const modal = ReactTestRenderer.create(
      <Modal>
        <p>Modal text</p>
      </Modal>);
    const json = modal.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should show if show prop is true', () => {
    const modal = ReactTestRenderer.create(
      <Modal show>
        <p>Modal text</p>
      </Modal>);
    const json = modal.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should display a title if prop is provided', () => {
    const modal = ReactTestRenderer.create(
      <Modal show title="Modal title">
        <p>Modal text</p>
      </Modal>);
    const json = modal.toJSON();
    expect(json).toMatchSnapshot();
  });
});
