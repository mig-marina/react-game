import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonIcon } from '../button-icon/button-icon.js';


export class Modal extends React.Component {

  closeModal(e) {
    const target = e.target;
    if(target.classList.contains('wrap-modal') || target.nodeName === 'SPAN') {
      const modal = document.querySelector('.wrap-modal');
  		modal.classList.remove('show');
      document.body.style.overflow = "visible";
    }
  }

	render() {
		return (
      <div className='wrap-modal' onClick={this.closeModal}>
        <div className="modal">
          <button><ButtonIcon icon='&#205;' title='close' onClick={this.closeModal} /></button>
          <div className="modal-content">
            <h2>Find matching pairs. Train your memory</h2>
            <p>The set includes several paired cards with the same image. They are located on the surface with the image down. The cards must be turned over one by one. If the pictures match for the last two adjacent actions of the player, the player earns points, and the pictures themselves are excluded from the game. Otherwise, the pictures remain in their places, only they are hidden from the user again. And the player continues to look for pairs.</p>
            <p><strong>Hotkeys</strong></p>
            <ul className="hot-keys">
              <li><strong>i</strong> - open game rules</li>
              <li><strong>u</strong> or <strong>a</strong> or <strong>c</strong> - change the cover of game cards (u - unicorn, a - animal, c - cat paws)</li>
              <li><strong>s</strong> - open settings game</li>
              <li><strong>n</strong> - new game</li>
              <li><strong>r</strong> - open the result of the last 10 games</li>
            </ul>
          </div>
        </div>
      </div>
		);
	}
}
