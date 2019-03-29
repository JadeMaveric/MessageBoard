'use strict';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {active: true, title: "Hello World", text: "Hey there", id: 0, type: "scheme"},
                {active: true, title: "First Comment", text: "By me", id: 0, type: "emergency", location: "127, 232"},
                {active: true, title: "First Comment", text: "By me", id: 0, type: "complaint", location: "Goa"},
                {active: true, title: "First Comment", text: "By me", id: 0, type: "jobs"},
                {active: true, title: "Hello World", text: "Hey there", id: 0, type: "lost", date: "today", author: "julius"},
                {active: true, title: "Hello World", text: "Hey there", id: 0, type: "news", author: "julius"},
                {active: true, title: "Hello World", text: "Hey there", id: 0, type: "schemes", author: "julius"},
                {active: false, title: "Hello World", text: "Hey there", id: 0, type: "scheme"},
                {active: false, title: "First Comment", text: "By me", id: 0, type: "emergency", location: "127, 232"},
                {active: false, title: "First Comment", text: "By me", id: 0, type: "complaint", location: "Goa"},
                {active: false, title: "First Comment", text: "By me", id: 0, type: "jobs"},
                {active: false, title: "Hello World", text: "Hey there", id: 0, type: "lost", date: "today", author: "julius"},
                {active: false, title: "Hello World", text: "Hey there", id: 0, type: "news", author: "julius"},
                {active: false, title: "Hello World", text: "Hey there", id: 0, type: "schemes", author: "julius"},
            ]
        }
    }

    add(item) {
        this.state.cards.push(item);
    }

    remove(id) {
        let pos = this.state.cards.forEach(element => {
            if(element.id == id) {
                return id;
            }
        });
        this.state.cards.splice(pos, 1);
    }

    render() {
        return (
            <ul> {
            this.state.cards.map( (card, index) => 
            <li key={index}>
                <Card
                    active={card.active}
                    priority={card.priority}
                    active={card.active}
                    title={card.title}
                    text ={card.text}
                    text2={card.text2}
                    text3={card.text3}
                    date={card.date}
                    author={card.author}
                    type={card.type}
                    location={card.location}
                    salary={card.salary}
                />
            </li>
            )}
            </ul>
        );
    }
}