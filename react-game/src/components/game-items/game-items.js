import React from 'react';
import ReactDOM from 'react-dom';

const Back = (props) => {
  return(
    <div className="back"></div>
  );
}
const GameItems = (props) => {
  let listItems = props.items;

  // let listItems = [];
  // const n = props.count;
  // const leng = n * 2;
  // while (listItems.length < leng) {
  //   let index = Math.floor(Math.random() * leng) + 1;
  //   if(listItems.indexOf(index) == -1) {
  //     listItems.push(index);
  //   }
  // };
  // listItems = listItems.map((item) => {
  //   if(item > n) {
  //     item = item - n;
  //   }
  //   return item;
  // });
  // console.log(listItems);

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
