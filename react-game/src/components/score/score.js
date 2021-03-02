import React from 'react';
import ReactDOM from 'react-dom';

export class Score extends React.Component {
  render() {
		return (
      <div className="score">
        <p>score: {this.props.score}</p>
        <p>steps: {this.props.steps}</p>
      </div>
    );
  }
}
