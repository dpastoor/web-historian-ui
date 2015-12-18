import React, { Component } from 'react';
import mui, {Card, List } from 'material-ui';
export default class SiteHtml extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      let renderedHTML = (this.props.html === "") ? "" :
      <div dangerouslySetInnerHTML={{__html: this.props.html}} />
        return (
            <Card style={{
                flexGrow: 3,
                minWidth: '33vw',
                overflowY: 'auto'
            }}>
                <List>
                       <div style={{
                    color: 'black',
                    fontSize: 20,
                    textAlign: 'center'
                       }}>
                       </div>
                       {renderedHTML}
                </List>
            </Card>
        )
    }
}
