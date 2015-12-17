import React, { Component } from 'react';
import mui, {Card, List } from 'material-ui'

export default class SiteList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{
                flexGrow: 1,
                minWidth: '10vw',
                overflowY: 'auto'
            }}>
                <List>
                       <div style={{
                    color: 'black',
                    fontSize: 20,
                    textAlign: 'center'
                       }}>
                           Site List
                       </div>
                       Sites will go here
                </List>
            </Card>
        )
    }
}
