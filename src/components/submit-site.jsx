import React from 'react';
import mui, {Card, TextField} from 'material-ui';
export default class SubmitField extends React.Component {
    constructor(props) {
        super(props);
    }
    _onSubmit(event) {
        let messageText = event.target.value;
        console.log(messageText);
        event.target.value = "";
    }
    render() {
        return (
            <Card style={{
            maxWidth: 1200,
            margin: '30px auto 30px',
            padding: 30
            }}>
                <TextField
                       hintText="type your message here"
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
                onEnterKeyDown={this._onSubmit.bind(this)}
                />
            </Card>
        )
    }
}
