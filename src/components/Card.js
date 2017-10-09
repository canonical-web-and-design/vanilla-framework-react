import React from 'react';

class Card extends React.Component {

  render() {
    return (
      <div className={ this.props.modifier ? 'p-card--' +  this.props.modifier : 'p-card' }>
        <header className="p-card__header">
          <img src={ this.props.imgSrc } alt="placeholder" />
        </header>
        <h3 className="p-card__title">{ this.props.title }</h3>
        <p className="p-card__content">{ this.props.cardContent }</p>
      </div>
    )
  }
}

export default Card;
