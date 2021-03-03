import React from 'react';
import ReactDOM from 'react-dom';

import item from '../../assets/sound/music.mp3';

import { ButtonIcon } from '../button-icon/button-icon.js';

export class Music extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  play: false,
		  pause: true,
			index: 0,
		}

		this.url = item;
		this.audio = new Audio(this.url);
		this.audio.volume = 0.4;
		this.more = this.more.bind(this);
		this.litle = this.litle.bind(this);
	}

	play = () => {
	this.setState({ play: true, pause: false })
    this.audio.play();
	}

  pause = () => {
	this.setState({ play: false, pause: true })
    this.audio.pause();
  }

  more = () => {
	  if (this.audio.volume === 0.9) {
		}
		if (this.audio.volume < 0.9) {
			this.audio.volume = this.audio.volume + 0.1
		}
	 }

  litle = () => {
		if (this.audio.volume > 0) {
			this.audio.volume = this.audio.volume - 0.1
		}
		if (this.audio.volume === 0) {
		}
	}

  render() {

  return (
    <div className="wrap-music">
      <button onClick={this.play}><ButtonIcon icon='&#217;' title='play' /></button>
      <button onClick={this.pause}><ButtonIcon icon='&#220;' title='stop' /></button>
	  	<button onClick={this.more}><ButtonIcon icon='&#193;' title='more sound' /></button>
	  	<button onClick={this.litle}><ButtonIcon icon='&#196;' title='litle sound' /></button>
    </div>
    );
  }
}
