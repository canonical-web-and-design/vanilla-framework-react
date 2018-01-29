import React from 'react';

import SideNavBanner from './SideNavBanner';

class SideNav extends React.Component {
  constructor() {
    super();
    this.handleMenuClick = this.handleMenuClick.bind(this);

    this.state = { menuOpen: false };
  }

  handleMenuClick() {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    const { children } = this.props;
    const { menuOpen } = this.state;
    const content = [];
    let banner;

    React.Children.forEach(children, (child) => {
      if (child.type === SideNavBanner) {
        banner = React.cloneElement(child, {
          ...this.props,
          onClick: this.handleMenuClick,
          open: this.state.menuOpen,
        });
      } else {
        content.push(child);
      }
    });

    return (
      <div className="p-navigation--sidebar">
        { banner }
        <div className={`sidebar__content u-no-margin--top ${menuOpen ? '' : 'u-hide'}`}>
          <ul className="p-list">
            { content }
          </ul>
        </div>
      </div>
    );
  }
}

SideNav.defaultProps = {
  children: null,
};

SideNav.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;
    let count = 0;

    React.Children.forEach(prop, (child) => {
      if (child.type === SideNavBanner) {
        count += 1;
      }
    });

    if (count !== 1) {
      error = new Error(`${componentName} should have exactly one child of type "SideNavBanner".`);
    }

    return error;
  },
};

SideNav.displayName = 'SideNav';

export default SideNav;
