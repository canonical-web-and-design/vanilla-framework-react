import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      visible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

  handleClick(event) {
    const { onClick } = this.props;
    const { visible } = this.state;

    if (onClick) {
      onClick(event);
    } else {
      this.setState({ visible: !visible });
    }
  }

  render() {
    const {
      action, children, className, dismissable, status, caution, information, negative, positive,
      onClick,
    } = this.props;
    const { visible } = this.state;

    // XXX Can remove when bug is fixed in Vanilla Sass
    // https://github.com/vanilla-framework/vanilla-framework/issues/1928
    const styleFix = {
      backgroundColor: 'transparent',
      backgroundSize: '1rem',
      border: '0',
      margin: '1.1875rem 1rem auto auto',
      padding: '.5rem',
    };

    const classNames = getClassName({
      [className]: className,
      'p-notification--information': information,
      'p-notification--positive': positive,
      'p-notification--caution': caution,
      'p-notification--negative': negative,
    }) || 'p-notification';

    return (
      <div style={visible ? { display: 'flex' } : { display: 'none' }} className={classNames}>
        <p className="p-notification__response">
          {status && <span className="p-notification__status">{status}</span>}
          {children}
          {action && <a href={action.href} className="p-notification__action">{action.value}</a>}
        </p>
        {(dismissable || onClick) &&
          <button
            style={styleFix}
            className="p-icon--close"
            aria-label="Close notification"
            onClick={this.handleClick}
          >
            Close
          </button>
        }
      </div>
    );
  }
}

Notification.defaultProps = {
  action: null,
  caution: false,
  className: undefined,
  dismissable: true,
  information: false,
  negative: false,
  onClick: undefined,
  positive: false,
  status: null,
  visible: true,
};

Notification.propTypes = {
  action: PropTypes.shape({
    value: PropTypes.string,
    href: PropTypes.string,
  }),
  caution: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  information: PropTypes.bool,
  negative: PropTypes.bool,
  onClick: PropTypes.func,
  positive: PropTypes.bool,
  status: PropTypes.string,
  visible: PropTypes.bool,
};

Notification.displayName = 'Notification';

export default Notification;
