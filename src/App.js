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

    render() {
        return(
            <div>
                <div id="board">
                    <Board ref={this.board} />
                </div>
            </div>
        )
    }
}
const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);
