import React, { Component } from 'react';
import _ from 'lodash';
import mui, {Card, List, ListItem} from 'material-ui'
export default class SiteList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      let sites = _.map(this.props.sites, (site) => {
        return <ListItem> {site} </ListItem>;
      });
        return (
            <Card style={{
              flexGrow: 1,
              minWidth: '10vw',
              overflowY: 'auto'
            }}>
              <List>
                <div
                  style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center'
                  }}
                >
                  Site List
                </div>
                  {sites}
              </List>
            </Card>
        )
    }
}
