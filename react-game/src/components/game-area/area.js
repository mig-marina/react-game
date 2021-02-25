import React from 'react';
import ReactDOM from 'react-dom';

import { Score } from '../score/score.js';
import { ListItems } from '../list-items/listItems.js';
import { EndGame } from '../end-game/end.js';
import GameItems from '../game-items/game-items.js';

export class GameArea extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     score: 0,
     steps: 0,
     isNew: false,
   }

   this.items = 7;
   // this.arrayItems = [4, 1, 7, 5, 3, 7, 2, 4, 6, 5, 2, 1, 6, 3];
   this.arrayItems = [];
   this.count = 0;
   this.up = 0;
   this.hiddenBack = this.hiddenBack.bind(this);
   this.createItems = this.createItems.bind(this);
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
    console.log(this.arrayItems);
  }

  hiddenBack(e) {
    const target = e.target;
    const parentBlock = document.querySelector('.game-area-lists');
    const activeItem = document.querySelector('.back-hidden');


    while(target !== parentBlock) {
      if(target.classList.contains('back')) {

        if(activeItem) {
          console.log(activeItem.parentElement.classList.value);
          if(activeItem.parentElement.classList.value === target.parentElement.classList.value) {
            activeItem.parentElement.classList.add('disable');
            target.parentElement.classList.add('disable');

            activeItem.parentElement.removeChild(activeItem);
            target.parentElement.removeChild(target);
            this.up = this.up + 1;

            this.setState({
              score: this.up
            })

            if(this.up === 7) {
              console.log('finish!!!');
              const modal = document.querySelector('.wrap-end-modal');
              modal.classList.add('show');
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
      </div>
		);
	}
}
