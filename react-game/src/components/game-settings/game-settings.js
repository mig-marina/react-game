import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonIcon } from '../button-icon/button-icon.js';


export class GameSettings extends React.Component {
  constructor(props) {
   super(props);

   this.A_KEY = 65;
   this.C_KEY = 67;
   this.U_KEY = 85;
   this.setData = this.setData.bind(this);
  }

  setDarkTemplate() {
      const item = document.body;
      if(!item.classList.contains('dark')) {
        item.classList.add('dark');
      }
      if(item.classList.contains('blue')) {
        item.classList.remove('blue');
      }
  }

  setDefaultTemplate() {
    const item = document.body;
    if(item.classList.contains('dark')) {
      item.classList.remove('dark');
    }
    if(item.classList.contains('blue')) {
      item.classList.remove('blue');
    }
  }

  setBlueTemplate() {
    const item = document.body;
    if(item.classList.contains('dark')) {
      item.classList.remove('dark');
    }
    if(!item.classList.contains('blue')) {
      item.classList.add('blue');
    }
  }

  cartAnimals() {
    const item = document.querySelector('.game-area-lists');
    if(!item.classList.contains('animal')) {
      item.classList.add('animal');
    }
    if(item.classList.contains('cat')) {
      item.classList.remove('cat');
    }
  }

  cartUnicorn() {
    const item = document.querySelector('.game-area-lists');
    if(item.classList.contains('animal')) {
      item.classList.remove('animal');
    }
    if(item.classList.contains('cat')) {
      item.classList.remove('cat');
    }
  }

  cartCatPows() {
    const item = document.querySelector('.game-area-lists');
    if(!item.classList.contains('cat')) {
      item.classList.add('cat');
    }
    if(item.classList.contains('animal')) {
      item.classList.remove('animal');
    }
  }

  setData() {
    const items = document.querySelectorAll('.settings-size input');
    let v;
    for(let i = 0; i < items.length; i++) {
      if(items[i].checked) {
        v = items[i];
      }
    }
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

    handleKeyDown = (event) => {
        switch( event.keyCode ) {
            case this.A_KEY:
                if(!document.querySelector('.wrap-end-modal').classList.contains('show')) {
                  this.cartAnimals();
                }
                break;
            case this.C_KEY:
                if(!document.querySelector('.wrap-end-modal').classList.contains('show')) {
                  this.cartCatPows();
                }
                break;
            case this.U_KEY:
                if(!document.querySelector('.wrap-end-modal').classList.contains('show')) {
                  this.cartUnicorn();
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
              <label><input type="radio" value="10" name="size" /> 20 </label>
            </div>
            <div className="settings-apply">
              <button onClick={this.setData}>new apply</button>
            </div>
            <p>Select a template for the game</p>
            <div className="settings-bg">
              <button onClick={this.setDarkTemplate}>dark</button>
              <button onClick={this.setDefaultTemplate}>default</button>
              <button onClick={this.setBlueTemplate}>blue</button>
            </div>
            <p>Select the type of cards for the game</p>
            <div className="settings-cards">
              <button onClick={this.cartUnicorn}>unicorn</button>
              <button onClick={this.cartAnimals}>animals</button>
              <button onClick={this.cartCatPows}>cat paws</button>
            </div>
          </div>
        </div>
      </div>
		);
	}
}
