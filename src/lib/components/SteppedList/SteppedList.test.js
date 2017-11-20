import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import SteppedList from './SteppedList';
import SteppedListItem from './SteppedListItem';

describe('SteppedList component', () => {
  it('should render a simple stepped list correctly', () => {
    const steppedList = ReactTestRenderer.create(
      <SteppedList>
        <SteppedListItem
          title="First step"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
          dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
          vitae turpis iaculis, ut tempor enim gravida.
        </SteppedListItem>
        <SteppedListItem
          title="Second step"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
          dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
          vitae turpis iaculis, ut tempor enim gravida.
        </SteppedListItem>
        <SteppedListItem
          title="Third step"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
          dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
          vitae turpis iaculis, ut tempor enim gravida.
        </SteppedListItem>
        <SteppedListItem
          title="Last but not least"
          bullet="99"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
          dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
          vitae turpis iaculis, ut tempor enim gravida.
        </SteppedListItem>
      </SteppedList>,
    );
    const json = steppedList.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a detailed stepped list correctly', () => {
    const steppedList = ReactTestRenderer.create(
      <SteppedList detailed>
        <SteppedListItem
          title="First step"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
          dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
          vitae turpis iaculis, ut tempor enim gravida.
        </SteppedListItem>
        <SteppedListItem
          title="Second step"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
          dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
          vitae turpis iaculis, ut tempor enim gravida.
        </SteppedListItem>
        <SteppedListItem
          title="Third step"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
          dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
          vitae turpis iaculis, ut tempor enim gravida.
        </SteppedListItem>
        <SteppedListItem
          title="Last but not least"
          bullet="99"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
          dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
          vitae turpis iaculis, ut tempor enim gravida.
        </SteppedListItem>
      </SteppedList>,
    );
    const json = steppedList.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should accept generic list items', () => {
    const steppedList = ReactTestRenderer.create(
      <SteppedList>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </SteppedList>,
    );
    const json = steppedList.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should not render anything if no children present', () => {
    const steppedList = ReactTestRenderer.create(
      <SteppedList />,
    );
    const json = steppedList.toJSON();
    expect(json).toMatchSnapshot();
  });
});
