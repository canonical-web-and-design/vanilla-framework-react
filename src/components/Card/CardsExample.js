import React from 'react';
import Card from './Card';

class CardsExample extends React.Component {
  constructor() {
    super();
    this.image = {
      src: 'http://placekitten.com/g/64/64',
      alt: 'Placeholder',
    };
  }
  render() {
    return (
      <div>
        <h2>Card</h2>
        <Card
          title="Card title"
          image={this.image}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </Card>
        <h2>Highlighted Card</h2>
        <Card
          modifier="highlighted"
          title="Card title"
          image={this.image}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </Card>
      </div>
    );
  }
}

export default CardsExample;
