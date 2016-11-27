import React, { Component } from 'react';
import { Router, Route, Link,hashHistory ,IndexRoute,applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { render } from 'react-dom';
import App from './components/index';
import Living from './components/living';
import Homepage from './components/homepage/homepage';
import Contact from './components/contact';
import Enterprise from './components/enterprise';
import Character from './components/character';
import Price from './components/price';
import Rtc from './components/rtc';
import About from './components/about';
import Pushsdk from './components/pushsdk';
import Player from './components/player';
import Document from './components/docment';

class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}  render={applyRouterMiddleware(useScroll())}>
                <Route path="/" component={App}>
                    <IndexRoute component={Homepage}/>
                    <Route path="contact" component={Contact}/>
                    <Route path="living" component={Living}/>
                    <Route path="enterprise" component={Enterprise}/>
                    <Route path="character" component={Character}/>
                    <Route path="price" component={Price}/>
                    <Route path="rtc" component={Rtc}/>
                    <Route path="about" component={About}/>
                    <Route path="pushsdk" component={Pushsdk}/>
                    <Route path="player" component={Player}/>
                    <Route path="document" component={Document}/>
                </Route>
            </Router>
        )
    }
}

export default Routers;