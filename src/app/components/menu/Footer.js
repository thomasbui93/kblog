import React, { Component} from 'react';
import { Link } from 'react-router';


export class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="footer container">
                <div className="col-1-2">
                    <h2> Bamboo</h2>
                    <h4>Find Me</h4>
                    <div className="social--container">
                        <div className="social--item text--center">
                            <i className="icono-facebook"></i>
                        </div>
                        <div className="social--item text--center">
                            <i className="icono-twitter"></i>
                        </div>
                        <div className="social--item text--center">
                            <i className="icono-gplus"></i>
                        </div>
                        <div className="social--item text--center">
                            <i className="icono-youtube"></i>
                        </div>
                    </div>

                </div>
                <div className="col-1-2">
                    <h4>Quick links</h4>
                    <div className="container quick-links">
                        <div className="text--uppercase text--head link">
                            <Link to="">Home </Link>
                        </div>
                        <div className="text--uppercase text--head link">
                            <Link to="about">About</Link>
                        </div>
                        <div className="text--uppercase text--head link">
                            <Link to="term">Term</Link>
                        </div>
                        <div className="text--uppercase text--head link">
                            <Link to="privacy">Privacy</Link>
                        </div>
                    </div>
                    <div className="quote text--sm">
                        "The journey of a thousand miles begins with a single step"
                        <br/>
                        <i>Lzao Tu</i>
                    </div>
                </div>
                <div className="footer__copyright">
                    © 2016 Bamboo. Khoa D. Bui
                </div>
            </div>
        )
    }
}
