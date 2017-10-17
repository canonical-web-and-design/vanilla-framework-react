import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
  <App />
);


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
