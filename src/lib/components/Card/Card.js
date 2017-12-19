import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor() {
    super();
    this.getClassString = this.getClassString.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  getClassString() {
    let classString = 'p-card';

    if (this.props.highlighted) classString = `${classString} p-card--highlighted`;
    if (this.props.overlay) classString = `${classString} p-card--overlay`;

    return classString;
  }

  renderHeader() {
    const { header, image } = this.props;

    return (
      <header className="p-card__header">
        {image ? <img src={image.src} alt={image.alt} /> : <h1>{header}</h1>}
      </header>
    );
  }

  render() {
    return (
      <div className={this.getClassString()}>
        { (this.props.header || this.props.image) && this.renderHeader() }
        { this.props.title &&
          <h3 className="p-card__title">{this.props.title}</h3>
        }
        { this.props.children }
      </div>
    );
  }
}

Card.defaultProps = {
  header: null,
  highlighted: false,
  image: null,
  overlay: false,
  title: null,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  highlighted: PropTypes.bool,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  overlay: PropTypes.bool,
  title: PropTypes.string,
};

Card.displayName = 'Card';

export default Card;
