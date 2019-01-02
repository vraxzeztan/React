/// States

var Welcome = React.createClass({
    getDefaultProps : function(){
        return {
            city : 'pune'
        }
    },
    // Step -1 - Initialise the state
    getInitialState : function(){
        return {
            city : this.props.city
        }
    },
    callme : function(e){
        //var user = this.refs.myname.value;
        var city = this.refs.city.value
        e.preventDefault();    // e = event obj
        // Step -2 - Set the state
        this.setState({
            city : city
        })
        //alert(city);
    },
    render: function(){
        /// Step 3 - Render the state
        // Call this.state.city instead for states
        var mycity = this.state.city;
        //var mycity = this.props.city;
        return  (
            <div>
                <h1>Welcome to {mycity}</h1>
                <p>Welcome to React Component</p>
                <form onSubmit={this.callme}>
                    <input type='text'ref='city' />
                    <button>Click Me</button>
                </form>
            </div>
        )
    }
});
ReactDOM.render(
    <Welcome city='delhi'/>,
    document.getElementById('app')
);