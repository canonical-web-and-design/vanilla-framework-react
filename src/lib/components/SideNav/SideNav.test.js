import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import SideNav from './SideNav';
import SideNavBanner from './SideNavBanner';
import SideNavGroup from './SideNavGroup';
import SideNavLink from './SideNavLink';

describe('<SideNav>', () => {
  it('renders with a text-based SideNavBanner correctly', () => {
    const sidenav = ReactTestRenderer.create(
      <SideNav>
        <SideNavBanner href="#" title="Title" />
      </SideNav>,
    );
    const json = sidenav.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders with a logo-based SideNavBanner correctly', () => {
    const sidenav = ReactTestRenderer.create(
      <SideNav>
        <SideNavBanner
          href="#"
          logo={{ src: 'https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg', alt: '' }}
        />
      </SideNav>,
    );
    const json = sidenav.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders with a single SideNavLink correctly', () => {
    const sidenav = ReactTestRenderer.create(
      <SideNav>
        <SideNavBanner href="#" title="Title" />
        <SideNavLink href="#" label="Link1" />
      </SideNav>,
    );
    const json = sidenav.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders with multiple SideNavLinks correctly', () => {
    const sidenav = ReactTestRenderer.create(
      <SideNav>
        <SideNavBanner href="#" title="Title" />
        <SideNavLink href="#" label="Link1" />
        <SideNavLink href="#" label="Link2" />
        <SideNavLink href="#" label="Link3" />
      </SideNav>,
    );
    const json = sidenav.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders with a SideNavGroup correctly', () => {
    const sidenav = ReactTestRenderer.create(
      <SideNav>
        <SideNavBanner href="#" title="Title" />
        <SideNavGroup label="Group">
          <SideNavLink href="#" label="Link" />
        </SideNavGroup>
      </SideNav>,
    );
    const json = sidenav.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders with multiple SideNavGroups correctly', () => {
    const sidenav = ReactTestRenderer.create(
      <SideNav>
        <SideNavBanner href="#" title="Title" />
        <SideNavGroup label="Group1">
          <SideNavLink href="#" label="Link1" />
        </SideNavGroup>
        <SideNavGroup label="Group2">
          <SideNavLink href="#" label="Link2" />
        </SideNavGroup>
        <SideNavGroup label="Group3">
          <SideNavLink href="#" label="Link3" />
        </SideNavGroup>
      </SideNav>,
    );
    const json = sidenav.toJSON();
    expect(json).toMatchSnapshot();
  });
});
