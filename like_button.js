'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render() {
    if (this.state.active) {
      return (
        <button
        onClick={() => { 
          this.setState({ active: false });
          ReactDOM.render("", cardContainer);
        }}>
        Deactivate
        </button>
        
      );
    }

    return (
      <button
      onClick={() => {
        this.setState({ active: true});
        ReactDOM.render(<Board/>, cardContainer);
      }}>
      Activate
      </button>
    );
  }
}

const domContainer = document.querySelector('#input');
ReactDOM.render(e(LikeButton), domContainer);