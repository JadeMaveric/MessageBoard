'use strict';

const e = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false,
            user: {name: "", email: "", role: ""}
        }
        this.board = React.createRef();
    }

    speak() {
        console.log("Hello OW");
        alert("Hello World!");
    }

    render() {
        return(
            <div>
                <div id="board">
                    <Board ref={this.board} />
                </div>
                <div id="button-container">
                    <Button type="button" label="Add" onClick={this.speak.bind(this)}/>
                    <Button type="button" label="Emergency" onClick={this.speak.bind(this)}/>
                </div>
            </div>
        )
    }
}
const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);
