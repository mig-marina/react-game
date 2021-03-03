import React from 'react';
import ReactDOM from 'react-dom';

import './css/normalize.css';
import './css/index.css';
import './css/cards-cover.css';
import './css/template-dark.css';
import './css/template-blue.css';

import { ButtonIcon } from './components/button-icon/button-icon.js';

import { Header } from './components/header/header.js';
import { Footer } from './components/footer/footer.js';
import { ListSettings } from './components/settings/button-settings.js';
import { GameArea } from './components/game-area/area.js';
import { Modal } from './components/modal/modal.js';
import { Statistics } from './components/statistics/statistics.js';


class Game extends React.Component {

  fullScreen() {
    const element = document.querySelector('.game-board');
    const item = document.querySelector('.fullscreen');


      if(element.requestFullScreen) {
        element.requestFullScreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      }
      item.classList.add('full');
      document.querySelector('.nofullscreen').classList.remove('full');
  }

  noFullScreen() {
    const element = document.querySelector('.game-board');
    const item = document.querySelector('.fullscreen');

    if(document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }

    item.classList.remove('full');
    document.querySelector('.nofullscreen').classList.add('full');
  }

  render() {
    return (
  	  <div className="wrap-game">
  		  <Header />
        <div className="game-board">
          <button className="fullscreen" onClick={this.fullScreen}><ButtonIcon icon='&#0062;' title='full screen' /></button>
          <button className="nofullscreen full" onClick={this.noFullScreen}><ButtonIcon icon='&#0060;' title=' exit full screen' /></button>
          <GameArea />
        </div>
  		  <Footer />
  		  <ListSettings />
        <Modal />
        <Statistics />

      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
