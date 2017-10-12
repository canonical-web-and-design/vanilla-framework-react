import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card/Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Card
      title="title"
      cardContent="Lorem ipsum dolor sit amet"
    />, div);
});
