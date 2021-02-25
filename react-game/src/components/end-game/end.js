import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonIcon } from '../button-icon/button-icon.js';


export class EndGame extends React.Component {

  closeModal(e) {
    const target = e.target;
    if(target.classList.contains('wrap-end-modal') || target.nodeName === 'SPAN') {
      const modal = document.querySelector('.wrap-end-modal');
  		modal.classList.remove('show');
      document.body.style.overflow = "visible";
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
            <p className="end-description">In order to start a new game - <strong>press the button or the N key</strong></p>
          </div>
        </div>
      </div>
		);
	}
}
