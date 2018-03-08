import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ToolTip from './ToolTip';

describe('ToolTip component', () => {
  it('should render a tooltip component', () => {
    const toolTip = ReactTestRenderer.create(
      <ToolTip id="default-tooltip" message="Lorem ipsum dolor sit amet">
        Bottom left tooltip
      </ToolTip>,
    );
    const json = toolTip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a tooltip component with a bottom center tooltip', () => {
    const toolTip = ReactTestRenderer.create(
      <ToolTip id="btm-cntr" message="Lorem ipsum dolor sit amet" position="btm-center">
        Bottom center tooltip
      </ToolTip>,
    );
    const json = toolTip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a tooltip component with a bottomright tooltip', () => {
    const toolTip = ReactTestRenderer.create(
      <ToolTip id="btm-right" message="Lorem ipsum dolor sit amet" position="btm-right">
        Bottom right tooltip
      </ToolTip>,
    );
    const json = toolTip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a tooltip component with a left tooltip', () => {
    const toolTip = ReactTestRenderer.create(
      <ToolTip id="left" message="Lorem ipsum dolor sit amet" position="left">
        Left tooltip
      </ToolTip>,
    );
    const json = toolTip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a tooltip component with a right tooltip', () => {
    const toolTip = ReactTestRenderer.create(
      <ToolTip id="right" message="Lorem ipsum dolor sit amet" position="right">
        Right tooltip
      </ToolTip>,
    );
    const json = toolTip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a tooltip component with a top left tooltip', () => {
    const toolTip = ReactTestRenderer.create(
      <ToolTip id="to-lft" message="Lorem ipsum dolor sit amet" position="top-left">
        Top left tooltip
      </ToolTip>,
    );
    const json = toolTip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a tooltip component with a top center tooltip', () => {
    const toolTip = ReactTestRenderer.create(
      <ToolTip id="tp-cntr" message="Lorem ipsum dolor sit amet" position="top-center">
        Top center tooltip
      </ToolTip>,
    );
    const json = toolTip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a tooltip component with a top right tooltip', () => {
    const toolTip = ReactTestRenderer.create(
      <ToolTip id="tp-right" message="Lorem ipsum dolor sit amet" position="top-right">
        Top right tooltip
      </ToolTip>,
    );
    const json = toolTip.toJSON();
    expect(json).toMatchSnapshot();
  })
});
