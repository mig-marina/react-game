import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonIcon } from '../button-icon/button-icon.js';


export class Statistics extends React.Component {

  closeModal(e) {
    const target = e.target;
    if(target.classList.contains('wrap-statistics-modal') || target.nodeName === 'SPAN') {
      const modal = document.querySelector('.wrap-statistics-modal');
  		modal.classList.remove('show');
      document.body.style.overflow = "visible";
    }
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
              <tbody>
                <tr>
                  <td>user 1</td>
                  <td>25</td>
                  <td>48</td>
                </tr>
                <tr>
                  <td>user 2</td>
                  <td>35</td>
                  <td>49</td>
                </tr>
                <tr>
                  <td>user 3</td>
                  <td>135</td>
                  <td>79</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
		);
	}
}
