'use strict';

const cardContainer = document.querySelector('#output');

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            active: props.active,
            priority: props.priority,
            title: props.title,
            contact: props.contact,
            text: props.text,   // main text
            text2: props.text2, // auxillary text
            text3: props.text3, // less important text (optionals)
            date: props.date,
            author: props.author,
            location: props.location,
            type: props.type
        };
    }

    render() {
        return (
            <div className = {this.state.type + ' ' + (this.state.active?'active':'inactive') + ' card'}>
                <h3 className = 'title'>{this.state.title}</h3>
                <div className = 'text'>{this.state.text}</div>
                <div className = 'text2'>{this.state.text2}</div>
                <div className = 'contact'>{this.state.contact}</div>
                <div className = 'text3'>{this.state.text3}</div>
                <div className = 'location'>{this.state.location}</div>
                <div className = 'date'>{this.state.date}</div>
                <div className = 'author'>{this.state.author}</div>
                <button onClick={this.props.deleteCard} value={this.state.id}>
                Delete</button>
            </div>
        )
    }
}