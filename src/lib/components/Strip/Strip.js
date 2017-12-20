import React from 'react';
import PropTypes from 'prop-types';

const Strip = (props) => {
  let classArray = [];
  let style = Object.assign({}, props.style);
  const {
    colour, image, bordered, padding, children,
  } = props;

  if (colour) {
    classArray = [...classArray, `p-strip--${props.colour}`];
  }

  if (image.src) {
    const imageColour = `is-${image.colour}`;
    classArray = [...classArray, 'p-strip--image', imageColour];
    style = Object.assign(
      style, { backgroundImage: `url(${image.src})` },
    );
  }

  if (bordered) {
    classArray = [...classArray, 'is-bordered'];
  }

  if (padding) {
    classArray = [...classArray, `is-${padding}`];
  }

  const classString = classArray.join(' ');

  return (
    <section
      className={classString}
      style={style}
    >
      {children}
    </section>
  );
};

Strip.defaultProps = {
  colour: 'light',
  bordered: false,
  padding: null,
  image: {
    src: '',
    colour: 'dark',
  },
  style: {},
};

Strip.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(['light', 'dark', 'accent']),
  image: PropTypes.shape({
    src: PropTypes.string,
    colour: PropTypes.oneOf(['light', 'dark']),
  }),
  bordered: PropTypes.bool,
  padding: PropTypes.oneOf(['shallow', 'deep']),
  style: PropTypes.object,
};

Strip.displayName = 'Strip';

export default Strip;
