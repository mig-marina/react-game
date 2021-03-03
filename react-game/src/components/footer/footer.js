import React from 'react';
import ReactDOM from 'react-dom';

import logoRs from '../../assets/img/rs_school_js.svg';

import { Music } from '../music/music.js';
import { ButtonIcon } from '../button-icon/button-icon.js';

export class Footer extends React.Component {
	
	render() {
		const author = 'mig-marina';
    const url = "https://github.com/mig-marina";
    const urlRsSchool = "https://rs.school";
    const titleRsSchool = "rs-school";

		return (
			<footer>
        <p>&#9829;&nbsp;
          <a href={urlRsSchool} target="_blanck" className="rsschool" title={titleRsSchool}>
            <img src={logoRs} />
          </a>
           &#9829; made with crying and pain by &nbsp;
          <a href={url} target="_blanck">
             <ButtonIcon icon='&#0082;' title={author} />
          </a>
          &nbsp; - 2021 &#9829;
        </p>

				<Music />
			</footer>
		);
	}
}
