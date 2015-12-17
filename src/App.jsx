import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SubmitField from './components/submit-site.jsx';
import SiteList from './components/site-list.jsx';
import SiteHtml from './components/site-html.jsx';
import {AppBar} from 'material-ui'
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <div className="App">
         <AppBar title="search the archive:" />

         <SubmitField />
           <div style={{
              display: 'flex',
              flexFlow: 'row no-wrap',
              maxWidth: 1200,
              maxHeight: '500',
              width: '100%',
              margin: '30px auto 30px'
              }}>
         <SiteList />
         <SiteHtml />
       </div>
       </div>
    );
  }
}
