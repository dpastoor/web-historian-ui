import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SubmitField from './components/submit-site.jsx';
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
       </div>
    );
  }
}
