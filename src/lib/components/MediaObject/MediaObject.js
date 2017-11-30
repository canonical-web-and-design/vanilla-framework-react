import React from 'react';
import PropTypes from 'prop-types';
import './MediaObject.scss';

const MediaObject = (props) => {
  let image;
  let title;
  let description;
  let metadata;

  if (props.img) {
    image = (
      <img
        className={`p-media-object__image${props.round ? ' is-round' : ''}`}
        src={props.img.src}
        alt={props.img.alt}
      />
    );
  }

  if (props.title) {
    if (props.title.link) {
      title = (
        <h3 className="p-media-object__title">
          <a href={props.title.link}>{props.title.name}</a>
        </h3>
      );
    } else {
      title = (
        <h3 className="p-media-object__title">
          {props.title.name}
        </h3>
      );
    }
  }

  if (props.description) {
    description = (
      <p className="p-media-object__content">
        {props.description}
      </p>
    );
  }

  if (props.metadata) {
    const metadataItems = Object.keys(props.metadata).map((key) => {
      if (key === 'topic') {
        return (
          <li key={key} className="p-media-object__meta-list-item">
            {props.metadata[key]}
          </li>
        );
      }
      return (
        <li key={key} className={`p-media-object__meta-list-item--${key}`}>
          {props.metadata[key]}
        </li>
      );
    });

    metadata = (
      <ul className="p-media-object__meta-list">
        {metadataItems}
      </ul>
    );
  }

  return (
    <div className={props.large ? 'p-media-object--large' : 'p-media-object'}>
      {image}
      <div className="p-media-object__details">
        {title}
        {description}
        {metadata}
      </div>
    </div>
  );
};

MediaObject.defaultProps = {
  round: false,
  large: false,
  img: null,
  title: null,
  description: null,
  metadata: null,
};

MediaObject.propTypes = {
  round: PropTypes.bool,
  large: PropTypes.bool,
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  title: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
  description: PropTypes.string,
  metadata: PropTypes.shape({
    topic: PropTypes.string,
    date: PropTypes.string,
    venue: PropTypes.string,
    location: PropTypes.string,
  }),
};

MediaObject.displayName = 'MediaObject';

export default MediaObject;
