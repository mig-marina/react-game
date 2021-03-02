import React from 'react';
import ReactDOM from 'react-dom';

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
   this.items = 7;
   // this.arrayItems = [4, 1, 7, 5, 3, 7, 2, 4, 6, 5, 2, 1, 6, 3];
   this.arrayItems = [];
   this.count = 0;
   this.up = 0;
   this.playSound = this.playSound.bind(this);
   this.hiddenBack = this.hiddenBack.bind(this);
   this.createItems = this.createItems.bind(this);
   this.startNewGame = this.startNewGame.bind(this);
   this.updateData = this.updateData.bind(this);
  }

  updateData (value) {
    this.items = +value;
   this.setState({ items: value });
   console.log(this.state.items);
   console.log(this.items);

   this.createItems();
   this.startNewGame();
 }

  playSound(sound) {
     let audio = document.querySelector('audio');
     audio.src = sound;
     if (!audio) return;
         audio.currentTime = 0;
         audio.play();
   }

  startNewGame() {
    // const mass = document.querySelectorAll('.game-area-lists .back-hidden');
    // for(let i = 0; i < mass.length; i++) {
    //   if(mass[i].classList.contains('back-hidden')) {
    //     mass[i].classList.add('back');
    //   }
    // }
    const mass = document.querySelectorAll('.game-area-lists > div');
    console.log(mass);
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
    console.log(this.arrayItems);
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


    // return this.arrayItems;
  }

  hiddenBack(e) {
    const target = e.target;
    const parentBlock = document.querySelector('.game-area-lists');
    const activeItem = document.querySelector('.back-hidden');


    while(target !== parentBlock) {
      if(target.classList.contains('back')) {

        if(activeItem) {

          if(activeItem.parentElement.classList.value === target.parentElement.classList.value) {
            activeItem.parentElement.classList.add('disable');
            target.parentElement.classList.add('disable');

            activeItem.parentElement.removeChild(activeItem);
            target.parentElement.removeChild(target);
            // activeItem.classList.remove('back');
            // target.classList.remove('back');
            this.up = this.up + 1;

            this.setState({
              score: this.up
            })
            console.log(this.up, ' --- ', this.items);
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


  _handleKeyDown = (event) => {
			switch( event.keyCode ) {
					case this.N_KEY:
							this.startNewGame();
							break;
					// case this.S_KEY:
					// 		this.closeAllModal();
					// 		this.setSettings();
					// 		break;
					// case this.U_KEY:
					// 		this.cartUnicorn();
					// 		break;
					default:
							break;
			}
	}

	// componentWillMount deprecated in React 16.3
	componentDidMount(){
			// BannerDataStore.addChangeListener(this._onchange);
			// document.addEventListener("click", this._handleDocumentClick, false);
			document.addEventListener("keydown", this._handleKeyDown);
	}


	componentWillUnmount() {
			// BannerDataStore.removeChangeListener(this._onchange);
			// document.removeEventListener("click", this._handleDocumentClick, false);
			document.removeEventListener("keydown", this._handleKeyDown);
	}

	render() {
    this.createItems();

		return (
      <div>
        <Score score={this.state.score} steps={this.state.steps} />
        <div className='game-area' onClick={this.hiddenBack}>
          <GameItems count={this.items} items={this.arrayItems}/>
          {/*
          <div className="item-1"><div className="back"></div></div>
          <div className="item-2"><div className="back"></div></div>
          <div className="item-3"><div className="back"></div></div>
          <div className="item-4"><div className="back"></div></div>
          <div className="item-5"><div className="back"></div></div>
          <div className="item-6"><div className="back"></div></div>
          <div className="item-7"><div className="back"></div></div>
          <div className="item-7"><div className="back"></div></div>
          <div className="item-5"><div className="back"></div></div>
          <div className="item-6"><div className="back"></div></div>
          <div className="item-1"><div className="back"></div></div>
          <div className="item-2"><div className="back"></div></div>
          <div className="item-3"><div className="back"></div></div>
          <div className="item-4"><div className="back"></div></div>
          */}

        </div>
        <EndGame steps={this.state.steps} score={this.state.score} />
        <button className="start-new-game" onClick={this.startNewGame}>New Game</button>

        <GameSettings updateData={this.updateData} />
      </div>
		);
	}
}
