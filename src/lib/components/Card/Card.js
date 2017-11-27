import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className={this.props.modifier ? `p-card--${this.props.modifier}` : 'p-card'}>
        { this.props.image.src.length > 0 &&
          <header className="p-card__header">
            <img src={this.props.image.src} alt={this.props.image.alt} />
          </header>
        }
        <h3 className="p-card__title">{this.props.title}</h3>
        { this.props.children }
      </div>
    );
  }
}

Card.defaultProps = {
  modifier: '',
  image: {},
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object,
  modifier: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Card.displayName = 'Card';

export default Card;
