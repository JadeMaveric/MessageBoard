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

    speak() {
        
    }

    render() {
        return(
            <div>
                <div><Board/></div>
                <div id="button-container"><Button type="emergency" label="Emergency" onClick={this.speak.bind(this)}/></div>
            </div>
        )
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);