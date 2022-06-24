import { React } from 'react';
import './App.scss';
import GetCommon from './components/GetCommon.js';

const App = () =>
	<div className="App" role="App">
		{ GetCommon() }
	</div>;

export default App;
