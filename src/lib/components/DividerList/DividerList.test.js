import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import DividerList from './DividerList';
import DividerListItem from './DividerListItem';

describe('DividerList component', () => {
  it('should render two children correctly', () => {
    const dividerList = ReactTestRenderer.create(
      <DividerList>
        <DividerListItem>
          One
        </DividerListItem>
        <DividerListItem>
          Two
        </DividerListItem>
      </DividerList>,
    );
    const json = dividerList.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render three children correctly', () => {
    const dividerList = ReactTestRenderer.create(
      <DividerList>
        <DividerListItem>
          One
        </DividerListItem>
        <DividerListItem>
          Two
        </DividerListItem>
        <DividerListItem>
          Three
        </DividerListItem>
      </DividerList>,
    );
    const json = dividerList.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render four children correctly', () => {
    const dividerList = ReactTestRenderer.create(
      <DividerList>
        <DividerListItem>
          One
        </DividerListItem>
        <DividerListItem>
          Two
        </DividerListItem>
        <DividerListItem>
          Three
        </DividerListItem>
        <DividerListItem>
          Four
        </DividerListItem>
      </DividerList>,
    );
    const json = dividerList.toJSON();
    expect(json).toMatchSnapshot();
  });
});
