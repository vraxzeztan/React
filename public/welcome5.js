/// Event handling

var Welcome = React.createClass({
    getDefaultProps : function(){
        return {
            city : 'pune'
        }
    },
    callme : function(e){
        var user = this.refs.myname.value;
        e.preventDefault();    // e = event obj
        alert(user);
    },
    render: function(){
        var mycity = this.props.city;
        return  (
            <div>
                <h1>Welcome to {mycity}</h1>
                <p>Welcome to React Component</p>
                <form onSubmit={this.callme}>
                    <input type='text'ref='myname' />
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