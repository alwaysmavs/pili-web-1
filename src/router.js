import React, { Component } from 'react';
import { Router, Route, Link,hashHistory ,IndexRoute } from 'react-router';
import { render } from 'react-dom';
import App from './components/index';
import Living from './components/living/living';
import Homepage from './components/homepage/homepage';
import Contact from './components/contact/contact';
import Enterprise from './components/enterprise/enterprise';
import Character from './components/character/character';
import Price from './components/price/price';

class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Homepage}/>
                    <Route path="contact" component={Contact}/>
                    <Route path="living" component={Living}/>
                    <Route path="enterprise" component={Enterprise}/>
                    <Route path="character" component={Character}/>
                    <Route path="price" component={Price}/>
                </Route>
            </Router>
        )
    }
}

export default Routers;