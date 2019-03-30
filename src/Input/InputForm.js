'use strict';

class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          active: true,
          showPopup: true,
          priority: 0,
          type: '',
          title: '',
          contact: '',
          text: '',
          text2: '',
          text3: '',
          date: '',
          author: '',
          location: '',
          board: props.board
        };
      
      this.setType = this.setType.bind(this);
      this.handleActiveChange = this.handleActiveChange.bind(this);
      this.handlePriorityChange = this.handlePriorityChange.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleContactChange = this.handleContactChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleText2Change = this.handleText2Change.bind(this);
      this.handleText3Change = this.handleText3Change.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleAuthorChange = this.handleAuthorChange.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    handleActiveChange(event) {
        this.setState({
            active: event.target.value
          });
    }

    handlePriorityChange(event) {
        this.setState({
            priority: event.target.value
          });
    }

    handleContactChange(event) {
        this.setState({
            contact: event.target.value
          });
    }

    handleTitleChange(event) {
      this.setState({
          title: event.target.value
        });
  }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
          });
    }

    handleText2Change(event) {
        this.setState({
            text2: event.target.value
          });
    }

    handleText3Change(event) {
        this.setState({
            text3: event.target.value
          });
    }

    handleDateChange(event) {
        this.setState({
            date: event.target.value
          });
    }

    handleAuthorChange(event) {
        this.setState({
            author: event.target.value
          });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
          });
    }
  }