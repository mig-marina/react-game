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

	 this.ofMusic = this.ofMusic.bind(this);
	 this.onMusic = this.onMusic.bind(this);
	 this.showModal = this.showModal.bind(this);
	 this.showModalS = this.showModalS.bind(this);
	 this.setSettings = this.setSettings.bind(this);
 }

	renderSettings(i) {
		return <ItemSettings value = {i} />;
  }

	ofMusic() {
		document.querySelector('.on').classList.add('of-sound');
		document.querySelector('.of').classList.remove('of-sound');
	}

	onMusic() {
		document.querySelector('.on').classList.remove('of-sound');
		document.querySelector('.of').classList.add('of-sound');
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
							if(!document.querySelector('.wrap-end-modal').classList.contains('show')) {
								this.closeAllModal();
								this.showModal();
							}
							break;
					case this.S_KEY:
							if(!document.querySelector('.wrap-end-modal').classList.contains('show')) {
								this.closeAllModal();
								this.setSettings();
							}
							break;
					case this.R_KEY:
							if(!document.querySelector('.wrap-end-modal').classList.contains('show')) {
								this.closeAllModal();
								this.showModalS();
							}
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
			<button className="sound on" onClick={this.ofMusic}><ButtonIcon icon='&#0122;' title='sound' /></button>
			<button className="sound of of-sound" onClick={this.onMusic}><ButtonIcon icon='&#0120;' title='sound' /></button>
			{/*<button><ButtonIcon icon='&#243;' title='autoplay' /></button>*/}
			<button onClick={this.showModalS}><ButtonIcon icon='&#0113;' title='statistics' /></button>
		</div>
	);
  }
}
