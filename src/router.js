import React, { Component } from 'react';
import { Router, Route, Link,hashHistory ,IndexRoute } from 'react-router';
import { render } from 'react-dom';
import App from './components/index';
import Living from './components/living/living';
import Homepage from './components/homepage/homepage';
import Contact from './components/contact/contact';


class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Homepage}/>
                    <Route path="contact" component={Contact}/>
                    <Route path="living" component={Living}/>
                </Route>
            </Router>
        )
    }
}

export default Routers;