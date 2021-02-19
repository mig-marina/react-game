import React from 'react';
import ReactDOM from 'react-dom';
import { Music } from '../music/music.js';

export class Footer extends React.Component {
	render() {
		const author = 'mig-marina';
    const url = "https://github.com/mig-marina";

		return (
			<footer>
				<p>&#9829; made with crying and pain by <a href={url} target="_blanck">{author}</a> &#9829;</p>
				<Music />
			</footer>
		);
	}
}
