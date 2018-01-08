import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Notification = (props) => {
  const {
    action, children, status, caution, information, negative, positive,
  } = props;

  const className = classNames({
    'p-notification--information': information,
    'p-notification--positive': positive,
    'p-notification--caution': caution,
    'p-notification--negative': negative,
  });

  return (
    <div className={className || 'p-notification'}>
      <p className="p-notification__response">
        {status && <span className="p-notification__status">{status}</span>}
        {children}
        {action && <a href={action.href} className="p-notification__action">{action.value}</a>}
      </p>
    </div>
  );
};

Notification.defaultProps = {
  action: null,
  caution: false,
  information: false,
  negative: false,
  positive: false,
  status: null,
};

Notification.propTypes = {
  action: PropTypes.shape({
    value: PropTypes.string,
    href: PropTypes.string,
  }),
  caution: PropTypes.bool,
  children: PropTypes.node.isRequired,
  information: PropTypes.bool,
  negative: PropTypes.bool,
  positive: PropTypes.bool,
  status: PropTypes.string,
};

Notification.displayName = 'Notification';

export default Notification;
