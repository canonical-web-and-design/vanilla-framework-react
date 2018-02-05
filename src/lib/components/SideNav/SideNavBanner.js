import React from 'react';
import PropTypes from 'prop-types';

class SideNavBanner extends React.Component {
  render() {
    const {
      href, logo, onClick, open, tagline, title,
    } = this.props;

    const Tag = href ? 'a' : 'div';

    return (
      <header id="sidenav" role="banner">
        <div className="p-navigation__banner">
          <div className="row">
            <div className="mobile-col-2">
              <div className="p-navigation__logo">
                <Tag className="p-navigation__link" href={href}>
                  {(logo.src ?
                    <img className="p-navigation__image" src={logo.src} alt={logo.alt} /> : title
                  )}
                </Tag>
              </div>
              {tagline && <span className="p-navigation__tagline">{tagline}</span>}
            </div>
            <div className="sidebar__cta mobile-col-2 u-align--right">
              <ul className="p-inline-list u-no-margin--top">
                <li className="p-inline-list__item">
                  <i
                    className={`p-icon--menu ${open ? 'u-hide' : ''}`}
                    onClick={onClick}
                    onKeyDown={key => key === 'Enter' && onClick}
                    aria-hidden={open ? 'true' : 'false'}
                    role="button"
                    tabIndex={0}
                  />
                  <i
                    className={`p-icon--close ${open ? '' : 'u-hide'}`}
                    onClick={onClick}
                    onKeyDown={key => key === 'Enter' && onClick}
                    aria-hidden={open ? 'false' : 'true'}
                    role="button"
                    tabIndex={0}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

SideNavBanner.defaultProps = {
  href: null,
  logo: { src: null, alt: '' },
  onClick: () => 1,
  open: false,
  tagline: '',
  title: null,
};

SideNavBanner.propTypes = {
  href: PropTypes.string,
  logo: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
  onClick: PropTypes.func,
  open: PropTypes.bool,
  tagline: PropTypes.string,
  title: PropTypes.string,
};

SideNavBanner.displayName = 'SideNavBanner';

export default SideNavBanner;
