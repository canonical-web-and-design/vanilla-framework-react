import React from 'react';

import NavigationBanner from './NavigationBanner';
import NavigationLink from './NavigationLink';

class Navigation extends React.Component {
  render() {
    const { children } = this.props;
    const links = [];
    let banner;

    React.Children.forEach(children, (child) => {
      if (child.type === NavigationBanner) {
        banner = child;
      } else if (child.type === NavigationLink) {
        links.push(child);
      }
    });

    return (
      <header id="navigation" className="p-navigation">
        { banner }
        { links.length > 0 &&
          <nav className="p-navigation__nav">
            <ul className="p-navigation__links" role="menu">
              { links }
            </ul>
          </nav>
        }
      </header>
    );
  }
}

Navigation.defaultProps = {
  children: null,
};

Navigation.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;
    let count = 0;

    React.Children.forEach(prop, (child) => {
      if (child.type === NavigationBanner) {
        count += 1;
      }
    });

    if (count !== 1) {
      error = new Error(`${componentName} should have exactly one child of type "NavigationBanner".`);
    }

    return error;
  },
};

Navigation.displayName = 'Navigation';

export default Navigation;
