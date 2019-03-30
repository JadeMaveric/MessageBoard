'use strict';

class Lost extends InputForm {
    constructor(props) {
      super(props);
      this.setState({type: lost});
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      const state = this.state;
      delete state.board
      this.state.board(state)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Item Details:
            <textarea type="text" value={this.state.text} onChange={this.handleTextChange} />
          </label>
          <label>
            Finder's Details:
            <input type="text" value={this.state.contact} onChange={this.handleContactChange}/>
          </label>
          <label>
            Collect from:
            <input type="text" value={this.state.text2} onChange={this.handleText2Change}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }