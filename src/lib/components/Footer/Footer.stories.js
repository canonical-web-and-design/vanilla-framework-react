import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Footer from './Footer';
import FooterNav from './FooterNav';
import FooterNavContainer from './FooterNavContainer';

storiesOf('Footer', module)
  .add('Default',
    withInfo('You can use this simple footer pattern to display simple HTML elements: lists, headings, columns, icons, buttons, etc. Centering is optional.')(() => (
      <Footer>
        <p>
          <strong>Footer</strong> by Me. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </Footer>),
    ),
  )
  .add('With Links',
    withInfo('You can use this simple footer pattern to display copyright notices and a selection of links, using the FooterNavContainer and FooterNav sub-components.')(() => (
      <Footer>
        <p>&copy; 2017 Company name and logo are registered trademarks of Company Ltd.</p>
        <FooterNavContainer>
          <FooterNav title="Footer link 1" link="#" />
          <FooterNav title="Footer link 2" link="#" />
          <FooterNav title="Footer link 3" link="#" />
          <FooterNav title="Footer link 4" link="#" />
        </FooterNavContainer>
      </Footer>),
    ),
  );
