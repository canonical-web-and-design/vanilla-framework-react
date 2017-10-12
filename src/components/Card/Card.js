import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className={this.props.modifier ? `p-card--${this.props.modifier}` : 'p-card'}>
        <header className="p-card__header">
          <img src={this.props.imgSrc} alt={this.props.imgAlt} />
        </header>
        <h3 className="p-card__title">{this.props.title}</h3>
        { this.props.children }
      </div>
    );
  }
}

Card.defaultProps = {
  modifier: '',
  imgSrc: 'http://placehold.it/200x32',
  imgAlt: 'Placeholder',
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
  modifier: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Card;
