'use strict';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {title: "Hello World", text: "Hey there", id: 0, type: "caution"},
                {title: "First Comment", text: "By me", id: 0, type: "emergency", location: "127, 232"},
                {title: "First Comment", text: "By me", id: 0, type: "", location: "Goa"},
                {title: "First Comment", text: "By me", id: 0, type: "emergency"},
                {title: "Hello World", text: "Hey there", id: 0, type: "emergency", date: "today", author: "julius"},
                {title: "Hello World", text: "Hey there", id: 0, type: "caution", author: "julius"},
                {title: "Hello World", text: "Hey there", id: 0, type: "caution", author: "julius"},
                {title: "Hello World", text: "Hey there", id: 0, type: "caution"},
                {title: "Hello World", text: "Hey there", id: 0, type: "caution", author: "julius"},
                {title: "Hello World", text: "Hey there", id: 0, type: "caution"},
                {title: "Hello World", text: "Hey there", id: 0, type: "caution"},
                {title: "Hello World", text: "Hey there", id: 0, author: "julius"},
                {title: "Hello World", text: "Hey there", id: 0},
                {title: "Hello World", text: "Hey there", id: 0},
                {title: "Hello World", text: "Hey there", id: 0},
                {title: "Hello World", text: "Hey there", id: 0}
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