var Welcome = React.createClass({
    render: function(){
        return  (
            <div>
                <h1>Welcome to React Component</h1>
            </div>
        )
    }
});
ReactDOM.render(
    <Welcome/>,
    document.getElementById('app')
);