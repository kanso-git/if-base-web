import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="infofauna" />, document.getElementById('root'));
registerServiceWorker();
