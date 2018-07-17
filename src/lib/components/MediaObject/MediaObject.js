import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

class MediaObject extends React.Component {
  constructor() {
    super();

    this.generateMetadata = this.generateMetadata.bind(this);
  }

  generateMetadata() {
    const { metadata } = this.props;

    const metadataItems = metadata.map((item, index) => {
      const { description, type } = item;
      const key = `${type}${index}`;
      const metadataClass = getClassName({
        'p-media-object__meta-list-item': !type,
        'p-media-object__meta-list-item--date': type === 'date',
        'p-media-object__meta-list-item--location': type === 'location',
        'p-media-object__meta-list-item--venue': type === 'venue',
      }) || undefined;

      return (
        <li key={key} className={metadataClass}>{description}</li>
      );
    });

    return (
      <ul className="p-media-object__meta-list">
        {metadataItems}
      </ul>
    );
  }

  render() {
    const {
      children, className, href, img, large, metadata, round, title,
    } = this.props;

    const containerClass = getClassName({
      [className]: className,
      'p-media-object': !large,
      'p-media-object--large': large,
    }) || undefined;

    const imgClass = getClassName({
      'p-media-object__image': true,
      'is-round': round,
    } || undefined);

    return (
      <div className={containerClass}>
        {img &&
          <img className={imgClass} src={img.src} alt={img.alt} />
        }
        <div className="p-media-object__details">
          {title &&
            <h3 className="p-media-object__title">
              {href ? <a href={href}>{title}</a> : title}
            </h3>
          }
          {children &&
            <div className="p-media-object__content">
              {children}
            </div>
          }
          {metadata && this.generateMetadata()}
        </div>
      </div>
    );
  }
}

MediaObject.defaultProps = {
  children: undefined,
  className: undefined,
  href: undefined,
  img: undefined,
  large: false,
  metadata: undefined,
  round: false,
  title: undefined,
};

MediaObject.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  img: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  large: PropTypes.bool,
  metadata: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
  round: PropTypes.bool,
  title: PropTypes.string,
};

MediaObject.displayName = 'MediaObject';

export default MediaObject;
