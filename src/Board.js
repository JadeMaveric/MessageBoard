'use strict';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {id: "0", active: true, title: "Hello World", text: "Hey there", type: "scheme"},
                {id: "1", active: true, title: "First Comment", text: "By me", type: "emergency", location: "127, 232"},
                {id: "2", active: true, title: "First Comment", text: "By me", type: "complaint", location: "Goa"},
                {id: "3", active: true, title: "First Comment", text: "By me", type: "jobs"},
                {id: "4", active: true, title: "Hello World", text: "Hey there", type: "lost", date: "today", author: "julius"},
                {id: "5", active: true, title: "Hello World", text: "Hey there", type: "news", author: "julius"},
                {id: "6", active: true, title: "Hello World", text: "Hey there", type: "schemes", author: "julius"},
                {id: "7", active: false, title: "Hello World", text: "Hey there", type: "scheme"},
                {id: "8", active: false, title: "First Comment", text: "By me", type: "emergency", location: "127, 232"},
                {id: "9", active: false, title: "First Comment", text: "By me", type: "complaint", location: "Goa"},
                {id: "10", active: false, title: "First Comment", text: "By me", type: "jobs"},
                {id: "11", active: false, title: "Hello World", text: "Hey there", type: "lost", date: "today", author: "julius"},
                {id: "12", active: false, title: "Hello World", text: "Hey there", type: "news", author: "julius"},
                {id: "13", active: false, title: "Hello World", text: "Hey there", type: "schemes", author: "julius"},
            ]
        }
    }

    insertCard(item) {
        console.log(item);
        item.id = this.state.cards.length;
        let cards = [...this.state.cards];
        cards.push(item);
        this.setState({cards});
    }

    deleteCard(element) {
        let id = element.target.value;
        this.setState( state => {
            const list = state.cards.filter( el => el.id != id );
            console.log(list);
            return {cards: list};
        })
        console.log("Deleted element at %d", id);
    }

    render() {
        return (
            <div>
            <ul> {
            this.state.cards.map( (card, index) => 
            <li key={card.id}>
                <Card
                    id={card.id}
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
                    deleteCard={this.deleteCard.bind(this)}
                />
            </li>
            )}
            </ul>
            <div id="test">
                <Lost board={this.insertCard.bind(this)} />
            </div>
            </div>
        );
    }
}