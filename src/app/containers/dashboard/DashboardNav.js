import React, {Component} from 'react';
import { Link } from 'react-router';

import { Accordion } from '../../components/menu/Accordion';

export class DashboardNav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="dashboard-nav">
                <Accordion className="accordion">
                    <div className="accordion__header">
                        Accordion Header
                        <i className="icono-caretDown"></i>
                    </div>
                    <div className="accordion__content">
                        <div>
                            Item
                        </div>
                        <div>
                            Item
                        </div>
                    </div>
                </Accordion>
            </div>
        )
    }
}
