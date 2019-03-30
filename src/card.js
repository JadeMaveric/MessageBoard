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
                <h2 className = 'title'>{this.state.title}</h2>
                <ul>
                    <li className = 'text'>{this.state.text}</li>
                    <li className = 'author'>{this.state.author}</li>
                    <li className = 'location'>{this.state.location}</li>
                    <li className = 'text2'>{this.state.text2}</li>
                    <li className = 'contact'>{this.state.contact}</li>
                    <li className = 'text3'>{this.state.text3}</li>
                    <li className = 'date'>{this.state.date}</li>
                </ul>
                <button onClick={this.props.deleteCard} value={this.state.id}>
                Delete</button>
            </div>
        )
    }
}