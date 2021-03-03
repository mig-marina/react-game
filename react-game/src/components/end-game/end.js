import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonIcon } from '../button-icon/button-icon.js';


export class EndGame extends React.Component {
  constructor(props) {
   super(props);

   this.userName = 'user';
   this.userScore = '0';
   this.userSteps = '0';
   this.arrUsersResults = [];

   this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    const target = e.target;
    if(target.classList.contains('wrap-end-modal') || target.nodeName === 'SPAN') {
      const modal = document.querySelector('.wrap-end-modal');
  		modal.classList.remove('show');
      document.body.style.overflow = "visible";

      this.userName = document.querySelector('.user-name input').value;
      this.userScore = document.querySelector('.end-score strong').textContent;
      this.userSteps = document.querySelector('.end-steps strong').textContent;

      this.addResultGame(this.userName, this.userScore, this.userSteps);
    }
  }

  addResultGame(name, score, steps) {
    const dataUser = {};
    dataUser.name = name;
    dataUser.score = score;
    dataUser.steps = steps;

    if (localStorage.getItem('arrData') !== null) {
      let items = JSON.parse(localStorage.getItem('arrData'));

      if (items.length <= 10) {
        items.push(dataUser);
        localStorage.setItem('arrData', JSON.stringify(items));
      } else {
          items.shift();
          items.push(dataUser);
          localStorage.setItem('arrData', JSON.stringify(items));
      }

    } else {
      this.arrUsersResults.push(dataUser);
      localStorage.setItem('arrData', JSON.stringify(this.arrUsersResults));
    }

  }

	render() {
		return (
      <div className='wrap-end-modal' onClick={this.closeModal}>
        <div className="modal">
          <button><ButtonIcon icon='&#205;' title='close' onClick={this.closeModal} /></button>
          <div className="modal-content">
            <h2>Game Over</h2>
            <p className="end-steps">you took <strong>{this.props.steps}</strong> steps</p>
            <p className="end-score">scored <strong>{this.props.score}</strong> points</p>
            <p className="end-description">You can start a new game using <strong>the button in the main game window</strong> or <strong>the N key</strong></p>
            <p className="user-name">
              <label>Enter your name: <input type="text" /></label> and close the window
              {/*<button className="ok" onClick={this.closeModal}><span>ok</span></button>*/}
            </p>
          </div>
        </div>
      </div>
		);
	}
}
