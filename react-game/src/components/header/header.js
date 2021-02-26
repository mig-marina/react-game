import React from 'react';
import ReactDOM from 'react-dom';

const Logo = () => <h1>GAME</h1>;

export class Header extends React.Component {
	render() {
		return (
			<header className="header-game">
				<Logo />
			</header>
		);
	}
}
