import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import { Music } from './music.js'

// HEADER
const Logo = () => <h1>GAME</h1>;
class Header extends React.Component {
	render() {
		return (
			<header className="header-game">
				<Logo />
			</header>
		);
	}
}
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

class ListSettings extends React.Component {
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



class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value = {i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {	
    return (
	  <div className="wrap-game">
		<Header />
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
		<Footer />
		<ListSettings />
      </div>
    );
  }
}



class Footer extends React.Component {
	render() {
		const author = 'mig-marina';
		
		return (
			<footer>
				<p>&#9829; made with crying and pain by {author} &#9829;</p>
				<Music />
			</footer>
		);
	}
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
