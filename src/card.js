'use strict';

const cardContainer = document.querySelector('#output');

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            priority: props.priority,
            title: props.title,
            data: props.data,
            date: props.date,
            author: props.author,
            type: props.type
        };
    }

    render() {
        return (
            <div className = {this.state.type}>
                <h4>CARD</h4>
                <h6>{this.state.title}</h6>
                <span>{this.state.author}</span>
                <p>{this.state.data}</p>
            </div>
        )
    }
}