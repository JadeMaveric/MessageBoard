'use strict';

class Lost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          text: '',    //Item Details
          contact: '', //Finder's Details
          text2: '',   //Collect from
          board: props.board //The Card Manager
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          text: event.target.text,
          contact: event.target.contact,
          text2: event.target.text2
        });
    }
  
    handleSubmit(event) {
      board.insertCard({
          text: this.state.text,
          contact: this.state.contact,
          text2: this.state.text2
      })
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Item Details:
            <textarea type="text" value={this.state.text} onChange={this.handleChange} />
          </label>
          <label>
            Finder's Details:
            <input type="text" value={this.state.contact} onChange={this.handleChange}/>
          </label>
          <label>
            Collect from:
            <input type="text" value={this.state.text2} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }