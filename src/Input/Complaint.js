'use strict';

class Complaint extends React.Compononent{
    constructor(props){
        super(props);
        this.state={
            name: '', //name
            location: '', //address
            contact: '', //contact no.
            text: '', //complaint
            text2: '', //suggestion
            board:props.board 
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            name: event.target.name,
            location: event.target.location,
            contact: event.target.contact,
            text: event.target.text,
            text2: event.target.text2,
        });
    }

    handleSubmit(event){
        board.insertCard({
            name: this.state.name,
            location: this.state.location,
            contact: this.state.contact,
            text: this.state.text,
            text2: this.state.text2,
        })
        event.preventDefault();
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <textarea type="text" value={this.state.name} onChange={this.handleChange}/>
            </label>
            <label>
                Address:
                <textarea type="text" value={this.state.location} onChange={this.handleChange}/>
            </label>
            <label>
                Contact No.:
                <textarea type="text" value={this.state.contact} onChange={this.handleChange}/>
            </label>
            <label>
                Complaint:
                <textarea type="text" value={this.state.text} onChange={this.handleChange}/>
            </label>
            <label>
                Suggestions:
                <textarea type="text" value={this.state.text2} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
            </form>
        );
    }
}