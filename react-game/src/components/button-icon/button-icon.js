import React from 'react';
import ReactDOM from 'react-dom';

export class ButtonIcon extends React.Component {
	render() {
    return(
      <span className='icon' title={this.props.title}>
        {this.props.icon}
      </span>
    );
  }
}
