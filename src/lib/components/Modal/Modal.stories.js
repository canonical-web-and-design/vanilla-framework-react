import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Modal from './Modal';
import Button from '../Button/Button';
import Image from '../Image/Image';

class ModalExample extends React.Component {
  constructor() {
    super();
    this.state = { modal: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div>
        <Button neutral value="Show modal" onClick={this.toggleModal} />
        <Modal show={this.state.modal} title={text('Title', 'Cat Modal')} onClick={this.toggleModal}>
          <p>{text('Text', 'This is a Modal with a picture of a cat. Check it out!')}</p>
          <Image
            style={{ display: 'block', margin: '1rem auto' }}
            bordered
            src="http://placekitten.com/g/300/300"
            alt="cat"
          />
        </Modal>
      </div>
    );
  }
}

storiesOf('Modal', module)
  .add('Default',
    withInfo('The Modal component can be useful to overlay an area of the screen which can contain a prompt, dialog or interaction. Note that opening and closing the Modal requires props from a parent component, for example by adjusting it in the Knobs panel in Storybook.')(() => (
      <div>
        <Modal show={boolean('Show', false)} title={text('Title', 'Modal title')}>
          <p>{text('Description', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed, distinctio, alias accusantium veritatis magni magnam sapiente amet possimus in quis nisi autem iste, ullam facilis, deleniti voluptas enim. Perspiciatis vero eius debitis deserunt beatae doloribus tenetur accusantium consectetur nesciunt, minus, magni pariatur. Autem ipsa excepturi quod ducimus debitis voluptas!')}</p>
        </Modal>
      </div>),
    ),
  )

  .add('Example',
    withInfo('This is an example of how a Modal might be used in an application, in which the parent component (ModalExample) controls the \'show\' prop.')(() => (
      <ModalExample />),
    ),
  );
