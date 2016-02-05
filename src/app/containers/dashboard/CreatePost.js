import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { MdEditor } from '../../components/dashboard/MdEditor';


export class CreatePost extends Component{
    constructor(props){
        super(props);
        this.composePost = this.composePost.bind(this);

        this.state = {
            loading: false
        };

    }
    composePost(){
        this.setState({
            loading: true
        });
        console.log(this.refs.mdEditor.getMd());
    }
    render(){
        return (
            <div>
                <div className="banner banner--harmony banner--light right">New Post</div>
                <button className="btn btn--primary" onClick={this.composePost}> Publish</button>
                <MdEditor loading={this.state.loading} tempt="" ref="mdEditor"/>
            </div>
        )
    }
}
