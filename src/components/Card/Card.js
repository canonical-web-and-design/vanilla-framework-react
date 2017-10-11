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
        <p className="p-card__content">{this.props.cardContent}</p>
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
  modifier: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  cardContent: PropTypes.string.isRequired,
};

export default Card;
