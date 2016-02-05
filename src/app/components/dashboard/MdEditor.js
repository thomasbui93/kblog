import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import classNames from 'classnames';

import { ContentEditable } from '../../components/form/ContentEditable';
import { ProgressBar } from '../../components/static/ProgressBar';

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});


export class MdEditor extends Component{
    constructor(props){
        super(props);
        this.updateMd = this.updateMd.bind(this);
        this.toggleView = this.toggleView.bind(this);

        this.html2text = this.html2text.bind(this);
        this.toMd = this.toMd.bind(this);

        this.getMd = this.getMd.bind(this);

        this.state = {
            previewStyle: false,
            mdHtml: ''
        }
    }
    static propTypes(){
        return {
            loading: React.propTypes.boolean,
            tempt: React.propTypes.string
        }
    }
    updateMd(event){
        let rawMd = event.target.value;
        this.setState({
            mdHtml: marked(this.toMd(rawMd))
        });
    }
    html2text(html) {
        var tag = document.createElement('div');
        tag.innerHTML = html;

        return tag.innerText;
    }
    toMd(html) {
        var chunks = html.split('<div>');
        var remadeChunks = '';
        chunks.forEach(function (chunk) {
            remadeChunks += (this.html2text(chunk.replace(/<\/div>/g,'')) + "\n");
        }.bind(this));

        return remadeChunks;
    }
    toggleView(){
        this.setState({
            previewStyle: !this.state.previewStyle
        });
    }
    getMd(){
        return this.toMd(this.refs.md.lastHtml);
    }
    render(){
        return (
            <div className="editor">
                <div className="editor__control">
                    <div className={ classNames("banner banner--harmony", { active: this.state.previewStyle})}
                         onClick={this.toggleView}>
                        Preview
                    </div>
                    <div className={ classNames("banner banner--harmony", { active: !this.state.previewStyle})}
                         onClick={this.toggleView}>
                        Code
                    </div>
                </div>
                {
                    this.props.loading ? <ProgressBar/> : null
                }
                <div className="editor__wrapper" className={ classNames({hidden: this.state.previewStyle}) }>
                    <ContentEditable onChange={this.updateMd}
                                     className="editor__raw"
                                     temptHtml={ this.props.tempt }
                                     ref="md"
                    />
                </div>
                <div className={ classNames("editor__preview",{hidden: !this.state.previewStyle} )}
                     dangerouslySetInnerHTML={{__html: this.state.mdHtml}} >
                </div>
            </div>
        )
    }
}