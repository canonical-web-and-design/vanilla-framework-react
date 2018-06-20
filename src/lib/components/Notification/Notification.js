import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const Notification = (props) => {
  const {
    action, children, className, status, caution, information, negative, positive,
  } = props;

  const classNames = getClassName({
    [className]: className,
    'p-notification--information': information,
    'p-notification--positive': positive,
    'p-notification--caution': caution,
    'p-notification--negative': negative,
  }) || 'p-notification';

  return (
    <div className={classNames}>
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
  className: undefined,
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
  className: PropTypes.string,
  information: PropTypes.bool,
  negative: PropTypes.bool,
  positive: PropTypes.bool,
  status: PropTypes.string,
};

Notification.displayName = 'Notification';

export default Notification;
