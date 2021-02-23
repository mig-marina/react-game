import React from 'react';
import ReactDOM from 'react-dom';

import item1 from '../../assets/img/unicorn-1.jpg';
import item2 from '../../assets/img/unicorn-2.jpg';


export class GameArea extends React.Component {

  hiddenBack(e) {
    const target = e.target;
    const parentBlock = document.querySelector('.game-area');
    const activeItem = document.querySelector('.back-hidden');
    if(activeItem) {
      activeItem.classList.remove('back-hidden');
    }
    console.log(activeItem);
    while(target !== parentBlock) {
      if(target.classList.contains('back')) {
        target.classList.add('back-hidden');
        return;
      } else {
        target = target.parentNode;
      }
    }
    // target.classList.add('back-hidden');
  }

	render() {
		return (
      <div className='game-area' onClick={this.hiddenBack}>
        <div className="item item-1"><div className="back"></div></div>
        <div className="item item-2"><div className="back"></div></div>
        <div className="item item-3"><div className="back"></div></div>
        <div className="item item-4"><div className="back"></div></div>
        <div className="item item-5"><div className="back"></div></div>
        <div className="item item-6"><div className="back"></div></div>
        <div className="item item-7"><div className="back"></div></div>
        <div className="item item-8"><div className="back"></div></div>
        <div className="item item-9"><div className="back"></div></div>
        <div className="item item-10"><div className="back"></div></div>
        <div className="item item-11"><div className="back"></div></div>
        <div className="item item-12"><div className="back"></div></div>
        <div className="item item-13"><div className="back"></div></div>
        <div className="item item-14"><div className="back"></div></div>
      </div>
		);
	}
}
