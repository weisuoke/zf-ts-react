import * as React from 'react';
import * as ReactDOM from 'react-dom';
const root = document.getElementById('root');

const props = { className: 'title' };
const element = React.createElement('div', props, 'hello');
ReactDOM.render(element, root);
