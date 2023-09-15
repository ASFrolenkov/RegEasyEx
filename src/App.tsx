import React from 'react';
import classNames from './assets/styles/App.module.css'
import Logo from './components/Logo';
import OutputComponent from './components/OutputComponent';
import InputComponent from './components/InputComponent';

function App() {
	return (
		<div className={classNames.app}>
			<Logo/>
			<OutputComponent/>
			<InputComponent/>
		</div>
	);
}

export default App;
