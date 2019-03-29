console.clear();

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    deleteElement = function(){
        console.log("remove");
    }

    render = function(){
    
        var displayTask  = function(task, taskIndex){
            console.log("NEW ADDED TASK"+task);
    
            return <li>
                {task}
                <button onClick= {this.deleteElement}> Delete </button>
            </li>;
        };
    
        return <ul>
            {this.props.items.map((task, taskIndex) => 
                <li key={taskIndex}>
                    {task}
                    <button onClick={this.props.deleteTask} value={taskIndex}> Delete </button>
                </li>
            )}
        </ul>;
    }
}

class TaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            task: ''
        }
    }
        
    deleteTask = function(e) {
        var taskIndex = parseInt(e.target.value, 10);
        console.log('remove task: %d', taskIndex, this.state.items[taskIndex]);
        this.setState(state => {
            state.items.splice(taskIndex, 1);
            return {items: state.items};
        });
    }

    onChange = function(e) {
        this.setState({ task: e.target.value });
    }

    addTask = function (e){
        this.setState({
            items: this.state.items.concat([this.state.task]),
            task: ''
        })
    
        e.preventDefault();
    }

    render = function(){ 
        return(
            <div>
                <h1>My Task </h1>    
                <TaskList items={this.state.items} deleteTask={this.deleteTask.bind(this)} />
                
                <form onSubmit={this.addTask.bind(this)}>    
                    <input onChange={this.onChange.bind(this)} type="text" value={this.state.task}/>
                    <button> Add Task </button>    
                </form>    
            </div>
        );
    }
}
 
ReactDOM.render(<TaskApp />, document.getElementById('container'));

