import React from 'react';
import ReactDOM from 'react-dom';

const Back = (props) => {
  return(
    <div className="back"></div>
  );
}

const GameItems = (props) => {
  let listItems = props.items;

  listItems = listItems.map((item, i) =>
    <div key={i.toString()} className={`item-${item}`}>
      <div className="back"></div>
    </div>
  );

  return (
    <div className="game-area-lists">
      {listItems}
    </div>
  )
}

export default GameItems;
