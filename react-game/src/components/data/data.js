import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonIcon } from '../button-icon/button-icon.js';

const Data = (props) => {
  let items = JSON.parse(localStorage.getItem('arrData'));

  let listResult = items.map((item, i) =>
    <tr key={i.toString()}>
      <td>{item.name}</td>
      <td>{item.score}</td>
      <td>{item.steps}</td>
    </tr>
  );

  return (
    <tbody>
      {listResult}
    </tbody>
  )
}

export default Data;
