'use strict';

class Emergency extends InputForm {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      let st = this.state;
      st.type = "emergency";
      this.state.board(this.state);
      this.setState({showPopup: false});
      event.preventDefault();

    }
  
    render() {
      if(this.state.showPopup) {
        return (
          <div>
          <button className="emergency-button button">Add Emergency</button>
          <div className="popup">
            <div className="popup_inner emergency">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Title:<br/>
                  <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                </label>
                <br/>
                <label>
                  Message:<br/>
                  <textarea type="text" value={this.state.text} onChange={this.handleTextChange} />
                </label>
                <br/>
                <br/>
                <button onClick={()=>this.setState({showPopup: false})}>Close</button>
                <input type="submit" value="Submit" />
              </form>
              </div>
          </div>
          </div>
          );
      }
      else {
        return(
        <div>
          <button className="emergency-button button" onClick={()=>this.setState({showPopup: true})}>Add Emergency</button>
        </div>
        );
      }
    }
  }