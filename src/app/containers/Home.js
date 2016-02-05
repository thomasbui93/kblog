
import React, { Component } from 'react';
import { NewsGrid } from '../components/news/NewsGrid';
import { HighLight } from '../components/news/HighLight';

export class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <NewsGrid />
                <HighLight/>
            </div>
        )
    }
}