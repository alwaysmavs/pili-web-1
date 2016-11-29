import  Routers from './router';
import './style/main.less';

let Menu = React.createClass({
    render() {
        return (
            <div>
                <Routers />
            </div>
        );
    }
});

ReactDOM.render(React.createElement(Menu), document.getElementById('content'));




