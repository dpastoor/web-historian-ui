import React from 'react';
import mui, {Card, TextField} from 'material-ui';
import xhr from 'xhr';
export default class SubmitField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={{
            maxWidth: 1200,
            margin: '30px auto 30px',
            padding: 30
            }}>
                <TextField
                       hintText="What site would you like to see?"
                       style={{
                    width: '100%',
                    borderColor: '#D0D0D0',
                    resize: 'none',
                    borderRadius: 3,
                    minHeight: 50,
                    color: '#555',
                    fontSize: 16,
                    // to prevent the textarea from being
                    // highlighted while you type
                    outline: 'auto 0px'
                }}
                onEnterKeyDown={this.props.onsubmit}
                />
            </Card>
        )
    }
}
