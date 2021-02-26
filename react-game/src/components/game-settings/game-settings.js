import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonIcon } from '../button-icon/button-icon.js';


export class GameSettings extends React.Component {
  constructor(props) {
   super(props);

   this.setData = this.setData.bind(this);
  }

  setDarkFon() {
      const item = document.body;
      if(!item.classList.contains('dark')) {
        item.classList.add('dark');
      }
  }

  setDefaultFon() {
    const item = document.body;
    if(item.classList.contains('dark')) {
      item.classList.remove('dark');
    }
  }

  setData() {
    const items = document.querySelectorAll('.settings-size input');
    // let v = items.filter((item) => item.checked);
    let v;
    for(let i = 0; i < items.length; i++) {
      if(items[i].checked) {
        v = items[i];
      }
    }
    // console.log(v.value);
    return this.props.updateData(v.value);
  }

  closeModal(e) {
    const target = e.target;
    if(target.classList.contains('wrap-settings-modal') || target.nodeName === 'SPAN') {
      const modal = document.querySelector('.wrap-settings-modal');
  		modal.classList.remove('show');
      document.body.style.overflow = "visible";
    }
  }

	render() {
		return (
      <div className='wrap-settings-modal' onClick={this.closeModal}>
        <div className="modal">
          <button><ButtonIcon icon='&#205;' title='close' onClick={this.closeModal} /></button>
          <div className="modal-content">
            <h2>Game settings</h2>
            <p>Select the number of game cards</p>
            <div className="settings-size">
              <label><input type="radio" value="7" name="size" /> 14 </label>
              <label><input type="radio" value="8" name="size" /> 16 </label>
              <label><input type="radio" value="9" name="size" /> 18 </label>
            </div>
            <div className="settings-apply">
              <button onClick={this.setData}>new apply</button>
            </div>
            <p>Select a template for the game</p>
            <div className="settings-bg">
              <button onClick={this.setDarkFon}>dark</button>
              <button onClick={this.setDefaultFon}>default</button>
              <button>shine</button>
            </div>
            <p>Select the type of cards for the game</p>
            <div className="settings-cards">
              <button>unicorn</button>
              <button>other</button>
              <button>other</button>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
