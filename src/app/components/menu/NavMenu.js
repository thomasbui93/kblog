import React, { Component} from 'react';
import { Link } from 'react-router';

import {SearchBox} from './SearchBox';

export class NavMenu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="menu">
                <div className="menu__hamburger">
                    <img src="icons/menu.svg"/>
                </div>
                <div className="menu__nav">
                    <div className="menu__link link--highlight">
                        <Link to="javascript"> Javascript</Link>
                    </div>
                    <div className="menu__link link--highlight">
                        <Link to="css">CSS3</Link>
                    </div>
                    <div className="menu__link link--highlight">
                        <Link to="html">Progressive</Link>
                    </div>
                    <div className="menu__link link--highlight">
                        <Link to="nodejs">NodeJS</Link>
                    </div>
                    <div className="menu__link link--highlight">
                        <Link to="meteor">Meteor</Link>
                    </div>
                </div>
                <SearchBox/>
                <div className="menu__vertical">
                    <div className="vertical__link link--highlight vertical">
                        <Link to="javascript"> Javascript</Link>
                    </div>
                    <div className="vertical__link link--highlight vertical">
                        <Link to="css">CSS3</Link>
                    </div>
                    <div className="vertical__link link--highlight vertical">
                        <Link to="html">Progressive</Link>
                    </div>
                    <div className="vertical__link link--highlight vertical">
                        <Link to="nodejs">NodeJS</Link>
                    </div>
                    <div className="vertical__link link--highlight vertical">
                        <Link to="meteor">Meteor</Link>
                    </div>
                </div>
            </div>
        )
    }
}
