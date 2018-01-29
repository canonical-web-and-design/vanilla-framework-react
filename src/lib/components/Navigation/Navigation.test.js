import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Navigation from './Navigation';
import NavigationBanner from './NavigationBanner';
import NavigationLink from './NavigationLink';

describe('<Navigation>', () => {
  it('renders with a text-based NavigationBanner correctly', () => {
    const navigation = ReactTestRenderer.create(
      <Navigation>
        <NavigationBanner href="#" title="Title" />
      </Navigation>,
    );
    const json = navigation.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders with a logo-based NavigationBanner correctly', () => {
    const navigation = ReactTestRenderer.create(
      <Navigation>
        <NavigationBanner
          href="#"
          logo={{ src: 'https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg', alt: '' }}
        />
      </Navigation>,
    );
    const json = navigation.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders with a single NavigationLink correctly', () => {
    const navigation = ReactTestRenderer.create(
      <Navigation>
        <NavigationBanner href="#" title="Title" />
        <NavigationLink href="#" label="Link1" />
      </Navigation>,
    );
    const json = navigation.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders with multiple NavigationLinks correctly', () => {
    const navigation = ReactTestRenderer.create(
      <Navigation>
        <NavigationBanner href="#" title="Title" />
        <NavigationLink href="#" label="Link1" />
        <NavigationLink href="#" label="Link2" />
        <NavigationLink href="#" label="Link3" />
      </Navigation>,
    );
    const json = navigation.toJSON();
    expect(json).toMatchSnapshot();
  });
});
