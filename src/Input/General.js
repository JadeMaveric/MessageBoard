'use strict';

class General extends InputForm {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      let st = this.state;
      st.type = "lost";
      this.state.board(this.state);
      this.setState({showPopup: false});
      event.preventDefault();

    }
  
    render() {
      if(this.state.showPopup) {
        return (
          <div>
          <button className="general button">Add</button>
          <div className="popup">
            <div className="popup_inner lost">
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
                <label>
                  Details<br/>
                  <input type="text" value={this.state.text2} onChange={this.handleText2Change}/>
                </label>
                <br/>
                <label>
                  Contact:<br/>
                  <input type="text" value={this.state.contact} onChange={this.handleContactChange}/>
                </label>
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
          <button className="general button" onClick={()=>this.setState({showPopup: true})}>Add</button>
        </div>
        );
      }
    }
  }