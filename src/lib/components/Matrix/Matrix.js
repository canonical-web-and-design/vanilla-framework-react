import React from 'react';

import MatrixItem from './MatrixItem';

class Matrix extends React.Component {
  constructor() {
    super();
    this.generateExtras = this.generateExtras.bind(this);
  }

  generateExtras() {
    const { children } = this.props;
    const emptyItemCount = (2 * React.Children.count(children)) % 3;
    const extraMatrixItems = [];

    for (let i = 0; i < emptyItemCount; i += 1) {
      extraMatrixItems.push(<MatrixItem key={i} className="u-hide--small" />);
    }

    return extraMatrixItems;
  }

  render() {
    const { children } = this.props;

    // Generate extra MatrixItems to fill empty space in a row
    const extraMatrixItems = this.generateExtras();

    return (
      <ul className="p-matrix u-clearfix">
        { children }
        { extraMatrixItems.length > 0 && extraMatrixItems }
      </ul>
    );
  }
}

Matrix.defaultProps = {
  children: null,
};

Matrix.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== MatrixItem) {
        error = new Error(`${componentName} children should be of type "MatrixItem".`);
      }
    });

    return error;
  },
};

Matrix.displayName = 'Matrix';

export default Matrix;
