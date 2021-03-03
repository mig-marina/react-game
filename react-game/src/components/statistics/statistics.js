import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonIcon } from '../button-icon/button-icon.js';
import Data from '../data/data.js';

export class Statistics extends React.Component {

  constructor(props) {
   super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    const target = e.target;
    if(target.classList.contains('wrap-statistics-modal') || target.nodeName === 'SPAN') {
      const modal = document.querySelector('.wrap-statistics-modal');
  		modal.classList.remove('show');
      document.body.style.overflow = "visible";
    };
  }

	render() {

		return (
      <div className='wrap-statistics-modal' onClick={this.closeModal}>
        <div className="modal">
          <button><ButtonIcon icon='&#205;' title='close' onClick={this.closeModal} /></button>
          <div className="modal-content">
            <h2>Statistics</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Steps</th>
                </tr>
              </thead>

              <Data />
            </table>
            <p></p>
          </div>
        </div>
      </div>
		);
	}
}
