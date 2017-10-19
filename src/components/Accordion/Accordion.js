import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
  render() {
    return (
      <aside className="p-accordion" role="tablist">
        <ul className="p-accordion__list">
          <li className="p-accordion__group">
            <button
              className="p-accordion__tab"
              id="owner-tab"
              role="tab"
              aria-controls="#owner"
              aria-expanded="true"
            >
              Owner
            </button>
            <section
              className="p-accordion__panel"
              id="owner"
              role="tabpanel"
              aria-hidden="false"
              aria-labelledby="owner-tab"
            >
              <p>Open panel</p>
            </section>
          </li>
          <li className="p-accordion__group">
            <button
              className="p-accordion__tab"
              id="status-tab"
              role="tab"
              aria-controls="#status"
              aria-expanded="false"
            >
              Status
            </button>
            <section
              className="p-accordion__panel"
              id="status"
              role="tabpanel"
              aria-hidden="true"
              aria-labelledby="status-tab"
            >
              <p>Closed panel</p>
            </section>
          </li>
          <li className="p-accordion__group">
            <button
              className="p-accordion__tab"
              id="tags-tab"
              role="tab"
              aria-controls="#tags"
              aria-expanded="false"
            >
              Tags
            </button>
            <section
              className="p-accordion__panel"
              id="tags"
              role="tabpanel"
              aria-hidden="true"
              aria-labelledby="tags-tab"
            >
              <p>Closed panel</p>
            </section>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Accordion;
