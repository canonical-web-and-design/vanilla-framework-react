import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Notification from './Notification';

storiesOf('Notification', module).addDecorator(withKnobs)
  .add('Default',
    withInfo('Notification components are used to display global information. A Notification will display at the top and fill the full width of the page. It can be default, info, caution, negative or position.')(() => (
      <Notification
        information={boolean('Information', false)}
        positive={boolean('Positive', false)}
        caution={boolean('Caution', false)}
        negative={boolean('Negative', false)}
        status={text('Status', null)}
        action={{
          value: text('Action text', null),
          href: text('Action href', null),
        }}
      >
        {text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!')}
      </Notification>),
    ),
  )

  .add('Information',
    withInfo('The information prop should be used to convey an information message.')(() => (
      <Notification
        information={boolean('Information', true)}
        positive={boolean('Positive', false)}
        caution={boolean('Caution', false)}
        negative={boolean('Negative', false)}
        status={text('Status', 'Information:')}
        action={{
          value: text('Action text', null),
          href: text('Action href', null),
        }}
      >
        {text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!')}
      </Notification>),
    ),
  )

  .add('Positive',
    withInfo('This positive variant should be used to convey success or completion.')(() => (
      <Notification
        information={boolean('Information', false)}
        positive={boolean('Positive', true)}
        caution={boolean('Caution', false)}
        negative={boolean('Negative', false)}
        status={text('Status', 'Success:')}
        action={{
          value: text('Action text', null),
          href: text('Action href', null),
        }}
      >
        {text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!')}
      </Notification>),
    ),
  )

  .add('Caution',
    withInfo('This caution variant should be used to convey information that is not critical but the user should be aware of.')(() => (
      <Notification
        information={boolean('Information', false)}
        positive={boolean('Positive', false)}
        caution={boolean('Caution', true)}
        negative={boolean('Negative', false)}
        status={text('Status', 'Blocked:')}
        action={{
          value: text('Action text', null),
          href: text('Action href', null),
        }}
      >
        {text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!')}
      </Notification>),
    ),
  )

  .add('Negative',
    withInfo('This negative variant should be used to convey information that is critical and the user should take action.')(() => (
      <Notification
        information={boolean('Information', false)}
        positive={boolean('Positive', false)}
        caution={boolean('Caution', false)}
        negative={boolean('Negative', true)}
        status={text('Status', 'Error:')}
        action={{
          value: text('Action text', null),
          href: text('Action href', null),
        }}
      >
        {text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!')}
      </Notification>),
    ),
  )

  .add('With Action',
    withInfo('Notification components have the ability to add an action link to them.')(() => (
      <Notification
        information={boolean('Information', false)}
        positive={boolean('Positive', false)}
        caution={boolean('Caution', false)}
        negative={boolean('Negative', false)}
        status={text('Status', null)}
        action={{
          value: text('Action text', 'Dismiss'),
          href: text('Action href', '#'),
        }}
      >
        {text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsum nemo autem reiciendis nulla tempore natus repudiandae dolorem. Corporis maxime, iure maiores repellat, odit facilis!')}
      </Notification>),
    ),
  );
