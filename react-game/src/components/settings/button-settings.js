import React from 'react';
import ReactDOM from 'react-dom';

// SETTINGS BUTTONS
class ItemSettings extends React.Component {
	render() {
		return (
			<button className="settings-item">
			{this.props.value}
			</button>
		);
	}
}

export class ListSettings extends React.Component {
	renderSettings(i) {
		return <ItemSettings value = {i} />;
  }
  render() {
	const sett='Settings Game';

	return(
		<div className='settings-game'>
			{this.renderSettings('about')}
			{this.renderSettings('settings')}
			{this.renderSettings('sound')}
			{this.renderSettings('autoplay')}
			{this.renderSettings('statistics')}
		</div>
	);
  }
}
