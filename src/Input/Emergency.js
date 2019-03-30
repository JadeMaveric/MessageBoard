'use strict';

class Emergency extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: '', //emergency
            text: '', //description
            board: props.board
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleChangeSubmit=this.handleChangeSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            title: event.target.title,
            text: event.target.text,
        });
    }

    handleSubmit(event){
        board.insertCard({
            title: this.state.title,
            text: this.state.text,
        })
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
                Emergency:
                <textarea type="text" value={this.state.title} onChange={this.handleChange}/>
            </label>
            <label>
                Description:
                <textarea type="text" value={this.state.text} onchange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
            </form>
        );
    }

}