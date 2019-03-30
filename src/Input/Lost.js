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
          text: event.target.value,
          contact: event.target.value,
          text2: event.target.value
        });
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
          });
    }

    handleContactChange(event) {
        this.setState({
            contact: event.target.value
          });
    }

    handleText2Change(event) {
        this.setState({
            text2: event.target.value
          });
    }
  
    handleSubmit(event) {
      this.state.board({
          active: true,
          type: "lost",
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
            <textarea type="text" value={this.state.text} onChange={this.handleTextChange.bind(this)} />
          </label>
          <label>
            Finder's Details:
            <input type="text" value={this.state.contact} onChange={this.handleContactChange.bind(this)}/>
          </label>
          <label>
            Collect from:
            <input type="text" value={this.state.text2} onChange={this.handleText2Change.bind(this)}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }