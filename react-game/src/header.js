import React from 'react';
import ReactDOM from 'react-dom';


// HEADER
const Logo = () => <h1><span>G</span>AME</h1>;
export class Header extends React.Component {
	render() {
		return (
			<header className="header-game">
				<Logo />
				<ListSettings />
			</header>
		);
	}
}
