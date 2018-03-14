import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Form from './Form';
import FormControl from './FormControl';
import FormGroup from './FormGroup';
import FieldSet from './FieldSet';
import Input from '../Input/Input';
import Label from '../Input/Label';
import Button from '../Button/Button';

const inputTypes = [
  'text', 'password', 'file', 'hidden', 'date', 'month', 'select', 'textarea',
  'time', 'week', 'number', 'email', 'url', 'tel',
];

const exampleSubmit = (event) => {
  event.preventDefault();
  alert('You submitted the form!'); // eslint-disable-line no-alert
};

class ValidationExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);

    this.state = {
      value: '',
    };
  }

  getValidationState() {
    const { length } = this.state.value;
    if (length > 7) return { status: 'success', tag: 'Success: ', message: 'Username length OK' };
    else if (length > 3) return { status: 'caution', tag: 'Warning: ', message: 'A little bit longer...' };
    else if (length > 0) return { status: 'error', tag: 'Error: ', message: 'Username is too short' };
    return { status: null, tag: null, message: null };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={exampleSubmit}>
        <FormControl
          help="Username must be at least 8 characters long"
          validation={this.getValidationState()}
        >
          <Label htmlFor="exampleInput">Username</Label>
          <Input
            type="text"
            id="exampleInput"
            value={this.state.value}
            placeholder="Enter username"
            onInput={this.handleChange}
          />
        </FormControl>
        <Button positive type="submit">Register</Button>
      </Form>
    );
  }
}

storiesOf('Form', module)
  .add('Default',
    withInfo('Vanilla form controls have global styling defined at the HTML element level. Labels and most input types are 100% width of the <Form> parent element.')(() => (
      <Form onSubmit={exampleSubmit}>
        <Label htmlFor="input1">Text input</Label>
        <Input type="text" id="input1" placeholder="Enter text here" />
        <Label htmlFor="input2">Password input</Label>
        <Input type="password" id="input2" placeholder="Enter password here" />
        <Input type="radio" id="input3" name="radios" value="radio1" />
        <Label htmlFor="input3">Radio button 1</Label>
        <Input type="radio" id="input4" name="radios" value="radio2" />
        <Label htmlFor="input4">Radio button 2</Label>
        <Input type="checkbox" id="input5" name="checkboxes" value="checkbox1" />
        <Label htmlFor="input5">Checkbox 1</Label>
        <Input type="checkbox" id="input6" name="checkboxes" value="checkbox2" />
        <Label htmlFor="input6">Checkbox 2</Label>
        <Input type="checkbox" id="input7" name="checkboxes" value="checkbox3" />
        <Label htmlFor="input7">Checkbox 3</Label>
        <Label htmlFor="input8">Textarea</Label>
        <Input type="textarea" id="input8" rows="4" placeholder="Enter text here" />
        <Label htmlFor="input9">Select</Label>
        <Input type="select" id="input9" name="selects" defaultValue="">
          <option value="" disabled>Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Input>
        <Label htmlFor="input10">Choose a file</Label>
        <Input type="file" id="input10" />
        <Button positive type="submit">Submit</Button>
      </Form>),
    ),
  )

  .add('FieldSet',
    withInfo('You can use the <FieldSet> element to divide the form into different logical sections.')(() => (
      <Form>
        <FieldSet>
          <Label htmlFor="input1">Input 1</Label>
          <Input type="text" id="input1" />
          <Label htmlFor="input2">Input 2</Label>
          <Input type="text" id="input2" />
          <Label htmlFor="input3">Input 3</Label>
          <Input type="text" id="input3" />
        </FieldSet>
        <FieldSet>
          <Label htmlFor="input4">Input 4</Label>
          <Input type="textarea" id="input4" rows="6" />
        </FieldSet>
      </Form>),
    ),
  )

  .add('FormControl',
    withInfo('The <FormControl> component renders a form control with Vanilla styling, allowing support for help text and validation.')(() => (
      <Form onSubmit={exampleSubmit}>
        <FormControl
          help={text('Help text', 'This is some helpful text!')}
          validation={{
            status: select('Validation state', ['', 'success', 'caution', 'error'], 'success'),
            tag: text('Validation tag', 'Success: '),
            message: text('Validation text', 'You did something right!'),
          }}
        >
          <Label htmlFor="input1">Text input</Label>
          <Input
            type={select('Input type', inputTypes, 'text')}
            id="textInput1"
            placeholder={text('Placeholder', 'Enter text here')}
            maxLength={text('Max length', '')}
            required={boolean('Required', false)}
            disabled={boolean('Disabled', false)}
          />
        </FormControl>
        <Button positive type="submit">Submit</Button>
      </Form>),
    ),
  )

  .add('Validation example',
    withInfo('This is an example of form validation being used based on username length.')(() => (
      <ValidationExample />),
    ),
  )

  .add('Inline',
    withInfo('Forms can be made inline by adding the "inline" prop to <Form>. Note that each <Label> and associated <FormControl> are wrapped in a <FormGroup> component in order to apply styling correctly.')(() => (
      <div>
        <Form
          inline
          onSubmit={exampleSubmit}
        >
          <FormGroup>
            <Label htmlFor="exampleInput1">First name</Label>
            <FormControl help="A rose by any other name would smell as sweet.">
              <Input type="text" id="exampleInput1" defaultValue="William" />
            </FormControl>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleInput2">Last name</Label>
            <FormControl
              validation={{
                status: 'caution',
                tag: 'Nice try: ',
                message: 'You almost spelt it correctly!',
              }}
            >
              <Input type="text" id="exampleInput2" defaultValue="Shakespare" />
            </FormControl>
          </FormGroup>
          <Button positive type="submit">Add details</Button>
        </Form>
      </div>),
    ),
  )

  .add('Stacked',
    withInfo('Forms can be stacked by adding the "stacked" prop to <Form>. Note that each <Label> and associated <FormControl> are wrapped in a <FormGroup> component in order to apply styling correctly.')(() => (
      <Form stacked onSubmit={exampleSubmit}>
        <FormGroup>
          <Label htmlFor="input1">Username</Label>
          <FormControl
            help="Usernames must be all lowercase."
            validation={{
              status: 'success',
              tag: 'Success: ',
              message: 'Everything looks good!',
            }}
          >
            <Input type="text" id="input1" defaultValue="username" />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="input2">Password</Label>
          <FormControl
            validation={{
              status: 'caution',
              message: 'Passwords require at least one symbol.',
            }}
          >
            <Input type="password" id="input2" defaultValue="qwerty123" />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="input3">Address</Label>
          <FormControl
            validation={{
              status: 'error',
              tag: 'Error: ',
              message: 'Unable to locate address.',
            }}
          >
            <Input type="text" id="input3" defaultValue="1234 Five St" />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="input8">Additional comments</Label>
          <FormControl help="This text is more helpful than you think.">
            <Input type="textarea" id="input8" rows="4" placeholder="Enter text here" />
          </FormControl>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="input9">Location</Label>
          <FormControl>
            <Input type="select" id="input9" name="selects" defaultValue="">
              <option value="" disabled>Select a location</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Input>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="input10">Upload a photo</Label>
          <FormControl>
            <Input type="file" id="input10" />
          </FormControl>
        </FormGroup>
        <div className="u-align--right">
          <Button positive type="submit">Register</Button>
        </div>
      </Form>),
    ),
  );
