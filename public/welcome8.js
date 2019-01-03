/// Complete app

var WelcomeMessage = React.createClass({
    render : function(){
        var city = this.props.city;
        var state = this.props.state;
        return (
            <div>
                <h3>My City is {city}</h3>
                <h3>My State is {state}</h3>
            </div>
        )
    }
});

var WelcomeForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        var updates = {};
        var city = this.refs.city.value;        
        var state = this.refs.state.value;
        if(city.length>0){
            this.refs.city.value= '';
            updates.city = city;
        }
        if(state.length>0){
            this.refs.state.value= '';
            updates.state = state;
        }
    },
    render: function(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    Enter your city : <input type='text' ref='city' placeholder='Enter city'></input>
                </div>
                <div>
                    Enter your state : <input type='text' ref='state' placeholder='Enter state'></input>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
})