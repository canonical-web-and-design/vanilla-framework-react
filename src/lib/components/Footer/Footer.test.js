import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Footer from './Footer';
import FooterNavContainer from './FooterNavContainer';
import FooterNav from './FooterNav';

describe('Footer component', () => {
  it('should render basic HTML elements correctly', () => {
    const footer = ReactTestRenderer.create(
      <Footer>
        <h1>Heading 1</h1>
        <p>&copy; 2017 Company name and logo are registered trademarks of Company Ltd.</p>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
        </ul>
      </Footer>,
    );
    const json = footer.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render FooterNavContainer and FooterNav components correctly', () => {
    const footer = ReactTestRenderer.create(
      <Footer>
        <p>&copy; 2017 Company name and logo are registered trademarks of Company Ltd.</p>
        <FooterNavContainer>
          <FooterNav title="Footer link 1" link="#" />
          <FooterNav title="Footer link 2" link="#" />
          <FooterNav title="Footer link 3" link="#" />
          <FooterNav title="Footer link 4" link="#" />
        </FooterNavContainer>
      </Footer>,
    );
    const json = footer.toJSON();
    expect(json).toMatchSnapshot();
  });
});
