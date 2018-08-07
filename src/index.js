import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import Root from './components/Root';

import 'antd/dist/antd.css';

const store = configureStore();

render(
	<Root store={ store } />,
	document.getElementById('root')
);
