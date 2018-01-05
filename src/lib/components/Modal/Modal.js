import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const {
    children, onClick, show, title,
  } = props;

  return (
    <div
      className="p-modal"
      style={{ display: show ? 'flex' : 'none' }}
    >
      <div
        className="p-modal__dialog"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <header className="p-modal__header">
          <h2 className="p-modal__title">{ title }</h2>
          <button
            className="p-modal__close"
            aria-label="Close active modal"
            onClick={onClick}
          >
            Close
          </button>
        </header>
        { children }
      </div>
    </div>
  );
};

Modal.defaultProps = {
  onClick: () => 1,
  show: false,
  title: null,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string,
};

Modal.displayName = 'Modal';

export default Modal;
