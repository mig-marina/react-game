import React from 'react';
import ReactDOM from 'react-dom';

import sound from '../../assets/sound/sound.mp3';

import { Score } from '../score/score.js';
import { ListItems } from '../list-items/listItems.js';
import { EndGame } from '../end-game/end.js';
import GameItems from '../game-items/game-items.js';
import { GameSettings } from '../game-settings/game-settings.js';

export class GameArea extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     score: 0,
     steps: 0,
     isNew: false,
     items: 7,
     arrayForGame: [],
   }

   this.N_KEY = 78;
   this.MORESOUND_KEY = 187;
   this.LITLESOUND_KEY = 189;
   this.items = 7;
   this.arrayItems = [];
   this.count = 0;
   this.up = 0;

   this.url = sound;
   this.audio = new Audio(this.url);
   this.audio.volume = 0.1;

   this.playSound = this.playSound.bind(this);
   this.hiddenBack = this.hiddenBack.bind(this);
   this.createItems = this.createItems.bind(this);
   this.startNewGame = this.startNewGame.bind(this);
   this.updateData = this.updateData.bind(this);
  }

  updateData (value) {
   this.items = +value;
   this.setState({ items: value });
   this.createItems();
   this.startNewGame();
 }

  playSound(sound) {
     // let audio = document.querySelector('audio');
     // audio.src = sound;
     // audio.volume = 0.1;
     // if (!audio) return;
     //     audio.currentTime = 0;
     //     audio.play();
     this.audio.play();
   }

  startNewGame() {
    const mass = document.querySelectorAll('.game-area-lists > div');

    for(let i = 0; i < mass.length; i++) {
      if(mass[i].children.length === 0) {
        const elem = document.createElement('div');
        elem.classList.add('back');
        mass[i].appendChild(elem);
      }
      if(mass[i].classList.contains('disable')) {
        mass[i].classList.remove('disable');
      }
      if(mass[i].children[0].classList.contains('back-hidden')) {
        mass[i].children[0].classList.remove('back-hidden')
      }
    }

    this.arrayItems = [];
    this.count = 0;
    this.up = 0;
    this.createItems();

    this.setState({
      arrayForGame: this.arrayItems,
      score: 0,
      steps: 0
    });
  }

  createItems() {
    const leng = this.items * 2;

    while (this.arrayItems.length < leng) {
      let index = Math.floor(Math.random() * leng) + 1;
      if(this.arrayItems.indexOf(index) == -1) {
        this.arrayItems.push(index);
      }
    };

    this.arrayItems = this.arrayItems.map((item) => {
      if(item > this.items) {
        item = item - this.items;
      }
      return item;
    });
  }

  hiddenBack(e) {
    const target = e.target;
    const parentBlock = document.querySelector('.game-area-lists');
    const activeItem = document.querySelector('.back-hidden');

    while(target !== parentBlock) {
      if(target.classList.contains('back')) {

      if(!document.querySelector('.on').classList.contains('of-sound')) { this.playSound(sound)}

        if(activeItem) {

          if(activeItem.parentElement.classList.value === target.parentElement.classList.value && activeItem !== target) {
            activeItem.parentElement.classList.add('disable');
            target.parentElement.classList.add('disable');


            activeItem.parentElement.removeChild(activeItem);
            target.parentElement.removeChild(target);



            this.up = this.up + 1;

            this.setState({
              score: this.up
            })

            if(this.up === this.items) {
              const modal = document.querySelector('.wrap-end-modal');
              modal.classList.add('show');
              modal.style.top = window.scrollY + 'px';
          		document.body.style.overflow = "hidden";


            }
          } else {
              activeItem.classList.remove('back-hidden');
          }
        }

        target.classList.add('back-hidden');
        this.count = this.count + 1;

        this.setState({
          steps: this.count
        })
        return;
      } else {
        target = target.parentNode;
      }
    }
  }

  handleKeyDown = (event) => {
			switch( event.keyCode ) {
					case this.N_KEY:
              if(!document.querySelector('.wrap-end-modal').classList.contains('show')) {
                this.startNewGame();
              }
							break;
          case this.MORESOUND_KEY:
              if(!document.querySelector('.wrap-end-modal').classList.contains('show')) {
                console.log('more');
                if (this.audio.volume === 0.9) {
            		}
            		if (this.audio.volume < 0.9) {
            			this.audio.volume = this.audio.volume + 0.1
            		}
              }
    					break;
          case this.LITLESOUND_KEY:
              if(!document.querySelector('.wrap-end-modal').classList.contains('show')) {

                if (this.audio.volume > 0.1) {
            			this.audio.volume = this.audio.volume - 0.1
            		}
            		if (this.audio.volume === 0) {
            		}
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
    this.createItems();

		return (
      <div>
        <Score score={this.state.score} steps={this.state.steps} />

        <div className='game-area' onClick={this.hiddenBack}>
          <GameItems count={this.items} items={this.arrayItems}/>
        </div>

        <EndGame steps={this.state.steps} score={this.state.score} />

        <button className="start-new-game" onClick={this.startNewGame}>New Game</button>

        <GameSettings updateData={this.updateData} />

        <audio src=""></audio>
      </div>
		);
	}
}
