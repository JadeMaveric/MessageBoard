'use strict';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            label: props.label,
            onClick: props.onClick
        }
    }

    render() {
        return(
            <button id={this.state.type} onClick={this.state.onClick}>Emergency</button>
        )
    }
}