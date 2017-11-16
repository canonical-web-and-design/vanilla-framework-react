import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

describe('Breadcrumb component', () => {
  it('should render a simple Breadcrumb correctly', () => {
    const breadcrumb = ReactTestRenderer.create(
      <Breadcrumb>
        <BreadcrumbItem><a href="#a">Lorem</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#b">Ipsum</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#c">Dolor</a></BreadcrumbItem>
      </Breadcrumb>,
    );
    const json = breadcrumb.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Breadcrumb without links', () => {
    const breadcrumb = ReactTestRenderer.create(
      <Breadcrumb>
        <BreadcrumbItem><a href="#a">Lorem</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#b">Ipsum</a></BreadcrumbItem>
        <BreadcrumbItem>Dolor</BreadcrumbItem>
      </Breadcrumb>,
    );
    const json = breadcrumb.toJSON();
    expect(json).toMatchSnapshot();
  });
});
