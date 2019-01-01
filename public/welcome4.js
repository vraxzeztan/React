/// DEFAULT PROPS


var Welcome = React.createClass({
    getDefaultProps : function(){
        return {
            city : 'pune'
        }
    },
    render: function(){
        var mycity = this.props.city;
        return  (
            <div>
                <h1>Welcome to {mycity}</h1>
                <p>Welcome to React Component</p>
            </div>
        )
    }
});
ReactDOM.render(
    <Welcome /*city='delhi'*//>,
    document.getElementById('app')
);