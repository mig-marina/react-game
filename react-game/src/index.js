import React from 'react';
import ReactDOM from 'react-dom';

import './css/normalize.css';
import './css/index.css';

import { ButtonIcon } from './components/button-icon/button-icon.js';

import { Header } from './components/header/header.js';
import { Footer } from './components/footer/footer.js';
import { ListSettings } from './components/settings/button-settings.js';
import { GameArea } from './components/game-area/area.js';
import { Modal } from './components/modal/modal.js';



class Game extends React.Component {

  changeFon() {
    document.body.classList.toggle('black');
  }

  render() {
    return (
  	  <div className="wrap-game">
  		  <Header />
        {/*<button onClick={this.changeFon}><ButtonIcon icon='&#0126;' title='other music' /></button>*/}
        <div className="game-board">
            <GameArea />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
  		  <Footer />
  		  <ListSettings />
        <Modal />

      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
