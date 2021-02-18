import React from 'react';
import ReactDOM from 'react-dom';
import item from './assets/sound/music.mp3'

export class Music extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  play: false,
		  pause: true,
		  value: 0.1,
		}

		this.url = item;
		this.audio = new Audio(this.url);
		this.audio.volume = 0.1;
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
		console.log('max');
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
		console.log('zero');
	}
	}

  render() {

  return (
    <div>
      <button onClick={this.play}>Play</button>
      <button onClick={this.pause}>Pause</button>
	  <button onClick={this.more}>+</button>
	  <button onClick={this.litle}>-</button>
    </div>
    );
  }

}
