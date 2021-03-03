import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonIcon } from '../button-icon/button-icon.js';

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
	constructor(props) {
	 super(props);

	 this.I_KEY = 73;
	 this.S_KEY = 83;
	 this.R_KEY = 82;

	 this.toggleMusic = this.toggleMusic.bind(this);
	 this.showModal = this.showModal.bind(this);
	 this.showModalS = this.showModalS.bind(this);
	 this.setSettings = this.setSettings.bind(this);
 }

	renderSettings(i) {
		return <ItemSettings value = {i} />;
  }

	toggleMusic() {

	}

	showModal(e) {
		const modal = document.querySelector('.wrap-modal');
		modal.classList.add('show');
		modal.style.top = window.scrollY + 'px';
		document.body.style.overflow = "hidden";
	}

	showModalS(e) {
		const modal = document.querySelector('.wrap-statistics-modal');
		modal.classList.add('show');
		modal.style.top = window.scrollY + 'px';
		document.body.style.overflow = "hidden";
	}

	setSettings() {
		const modal = document.querySelector('.wrap-settings-modal');
		modal.classList.add('show');
		modal.style.top = window.scrollY + 'px';
		document.body.style.overflow = "hidden";
	}

	closeAllModal() {
		const items = document.querySelectorAll('.show');
		items.forEach((item) => item.classList.remove('show'));
	}

	handleKeyDown = (event) => {
			switch( event.keyCode ) {
					case this.I_KEY:
							this.closeAllModal();
							this.showModal();
							break;
					case this.S_KEY:
							this.closeAllModal();
							this.setSettings();
							break;
					case this.R_KEY:
							this.closeAllModal();
							this.showModalS();
							break;
					default:
							break;
			}
	}

	componentDidMount(){
			document.addEventListener("keydown", this.handleKeyDown);
	}

	componentWillUnmount() {
			document.removeEventListener("keydown", this.handleKeyDown);
	}

  render() {
	const sett='Settings Game';

	return(
		<div className='settings-game'>
			<button onClick={this.showModal}><ButtonIcon icon='&#0092;' title='rules' /></button>
			<button onClick={this.setSettings}><ButtonIcon icon='&#094;' title='settings' /></button>
			<button onClick={this.toggleMusic}><ButtonIcon icon='&#0121;' title='sound' /></button>
			<button><ButtonIcon icon='&#243;' title='autoplay' /></button>
			<button onClick={this.showModalS}><ButtonIcon icon='&#0113;' title='statistics' /></button>
		</div>
	);
  }
}
