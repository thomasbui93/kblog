
import React , { Component} from 'react';
import { DashboardNav } from './DashboardNav';

export class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="dashboard">
                <DashboardNav/>
                <div className="dashboard-content">
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}