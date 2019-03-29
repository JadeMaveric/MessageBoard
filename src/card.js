'use strict';

const cardContainer = document.querySelector('#output');

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            priority: props.priority,
            title: props.title,
            text: props.text,   // main text
            text2: props.text2, // auxillary text
            text3: props.text3, // less important text (optionals)
            date: props.date,
            author: props.author,
            location: props.location,
            type: props.type,
            salary: props.salary
        };
    }

    render() {
        return (
            <div className = {this.state.type + ' ' + (this.state.active?'active':'inactive')}>
                <h1 className = 'title'>{this.state.title}</h1>
                <p className = 'text'>{this.state.text}</p>
                <p className = 'location'>{this.state.location}</p>
                <p className = 'date'>{this.state.date}</p>
                <p className = 'author'>{this.state.author}</p>
            </div>
        )
    }
}