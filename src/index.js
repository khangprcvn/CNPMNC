import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Book />, document.getElementById('root'));
registerServiceWorker();
