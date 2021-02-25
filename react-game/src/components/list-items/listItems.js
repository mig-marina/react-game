import React from 'react';
import ReactDOM from 'react-dom';

export class ListItems extends React.Component {
  render() {
    const count = this.props.count;
    const arrItem = [];
    arrItem.length = count;
    const list = arrItem.fill('').forEach((i) => {
      <div className="item item-1"><div className="back"></div></div>
    });
    ;

		return (
      {list}
    );
  }
}
