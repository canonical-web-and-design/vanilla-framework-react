import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Input from './Input';
import Label from './Label';
import Button from '../Button/Button';
import Form from '../Form/Form';

const inputTypes = [
  'text', 'password', 'file', 'hidden', 'date', 'month',
  'time', 'week', 'number', 'email', 'url', 'tel',
];

const exampleSubmit = (event) => {
  event.preventDefault();
  alert('You submitted the form!'); // eslint-disable-line no-alert
};

storiesOf('Input', module)
  .add('Standard inputs',
    withInfo('Vanilla <Input> components support most HTML5 input types: text, password, file, hidden, date, month, time, week, number, email, url and tel. Note that a dummy submit function has been provided to prevent the page refreshing.')(() => (
      <Form onSubmit={exampleSubmit}>
        <Label htmlFor="textInput1">{text('Label', 'HTML5 input')}</Label>
        <Input
          type={select('Input type', inputTypes, 'text')}
          id="textInput1"
          placeholder={text('Placeholder', 'Placeholder')}
          maxLength={text('Max length', '')}
          required={boolean('Required', false)}
          disabled={boolean('Disabled', false)}
        />
        <Button neutral type="submit">Submit</Button>
      </Form>),
    ),
  )

  .add('Checkbox and Radio',
    withInfo('Use checkboxes and radio buttons to select one or more options. Note that <Input> components are placed before <Label> components for checkboxes and radio buttons.')(() => (
      <Form onSubmit={exampleSubmit}>
        <Input
          type={select('Type1', ['checkbox', 'radio'], 'checkbox')}
          id="input1"
          required={boolean('Required1', false)}
          disabled={boolean('Disabled1', false)}
          name="inputs"
        />
        <Label htmlFor="input1">{text('Label1', 'Input 1')}</Label>
        <Input
          type={select('Type2', ['checkbox', 'radio'], 'checkbox')}
          id="input2"
          required={boolean('Required2', false)}
          disabled={boolean('Disabled2', false)}
          name="inputs"
        />
        <Label htmlFor="input2">{text('Label2', 'Input 2')}</Label>
        <Button neutral type="submit">Submit</Button>
      </Form>),
    ),
  )

  .add('Textarea',
    withInfo('An <Input> with type="textarea" defines a multi-line text input control.')(() => (
      <Form onSubmit={exampleSubmit}>
        <Label htmlFor="textareaInput1">Textarea</Label>
        <Input
          type="textarea"
          id="textareaInput1"
          placeholder={text('Placeholder', 'Placeholder')}
          rows={text('Rows', '3')}
          required={boolean('Required', false)}
          disabled={boolean('Disabled', false)}
        />
        <Button neutral type="submit">Submit</Button>
      </Form>),
    ),
  )

  .add('Select',
    withInfo('An <Input> with type="select" creates a drop-down list.')(() => (
      <Form onSubmit={exampleSubmit}>
        <Label htmlFor="selectInput1">Select</Label>
        <Input
          type="select"
          id="selectInput1"
          name="selectExample1"
          required={boolean('Required', false)}
          disabled={boolean('Disabled', false)}
          defaultValue=""
          multiple={boolean('Multiple', false)}
        >
          <option value="" disabled>Select an option</option>
          <option value="1">{text('Option 1', 'Option 1')}</option>
          <option value="2">{text('Option 2', 'Option 2')}</option>
          <option value="3">{text('Option 3', 'Option 3')}</option>
        </Input>
        <Button neutral type="submit">Submit</Button>
      </Form>),
    ),
  );
