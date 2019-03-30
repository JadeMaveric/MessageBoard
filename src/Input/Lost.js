'use strict';

class Lost extends InputForm {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      this.setState({type: "lost"});
      this.state.board(this.state);
      this.setState({showPopup: false});
      event.preventDefault();

    }
  
    render() {
      if(this.state.showPopup) {
        return (
          <div className="popup">
            <div className="popup_inner lost">
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
              </div>
          </div>
          );
      }
      else {
        return("");
      }
    }
  }