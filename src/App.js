'use strict';

const e = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false,
            user: {name: "", email: "", role: ""}
        }
    }

    render() {
        return(
            <div><Board/></div>
        )
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);