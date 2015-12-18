import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import xhr from 'xhr';
import SubmitField from './components/submit-site.jsx';
import SiteList from './components/site-list.jsx';
import SiteHtml from './components/site-html.jsx';
import {AppBar} from 'material-ui'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {html: ""}
  }
  _onSubmit(event) {
    let messageText = event.target.value;
    xhr({
      url:'http://localhost:3001/' + messageText,
      json: true
    }, (err, req, body) => {
      console.log("----body----");
      console.log(typeof body);
      console.log("----body.html----");
      console.log(body.html);
         if (typeof body === 'object') {
           this.setState({
             html: body.html
           });
         } else {
           this.setState({
             html: body
           });
         }
    });
      event.target.value = "";
  }
  render() {
    return (
       <div className="App">
         <AppBar title="search the archive:" />

         <SubmitField onsubmit={this._onSubmit.bind(this)} />
           <div style={{
              display: 'flex',
              flexFlow: 'row no-wrap',
              maxWidth: 1200,
              maxHeight: '500',
              width: '100%',
              margin: '30px auto 30px'
              }}>
         <SiteList />
         <SiteHtml html={this.state.html} />
       </div>
       </div>
    );
  }
}
