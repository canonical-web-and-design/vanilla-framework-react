import React from 'react';
import PropTypes from 'prop-types';

class NavigationBanner extends React.Component {
  render() {
    const {
      href, logo, menuText, title,
    } = this.props;

    const Tag = href ? 'a' : 'div';

    return (
      <div className="p-navigation__banner">
        <div className="p-navigation__logo">
          <Tag className="p-navigation__link" href={href}>
            {(logo.src ?
              <img className="p-navigation__image" src={logo.src} alt={logo.alt} /> : <h3 style={{ margin: 0, alignSelf: 'center' }}>{title}</h3>
            )}
          </Tag>
        </div>
        <a href="#navigation" className="p-navigation__toggle--open" title="menu">
          { menuText.open }
        </a>
        <a href="#navigation-closed" className="p-navigation__toggle--close" title="close menu">
          { menuText.close }
        </a>
      </div>
    );
  }
}

NavigationBanner.defaultProps = {
  href: null,
  logo: { src: null, alt: '' },
  menuText: { open: 'Menu', close: 'Close menu' },
  title: null,
};

NavigationBanner.propTypes = {
  href: PropTypes.string,
  logo: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
  menuText: PropTypes.shape({ open: PropTypes.string, close: PropTypes.string }),
  title: PropTypes.string,
};

NavigationBanner.displayName = 'NavigationBanner';

export default NavigationBanner;
