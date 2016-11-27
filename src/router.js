import React, { Component } from 'react';
import { Router, Route, Link,hashHistory ,IndexRoute } from 'react-router';
import { render } from 'react-dom';
import App from './components/index';
import Living from './components/living/living';
import Homepage from './components/homepage/homepage';
import Contact from './components/public/contact';
import Enterprise from './components/enterprise/enterprise';
import Character from './components/character/character';
import Price from './components/price/price';
import Rtc from './components/rtc/rtc';
import About from './components/about/about';
import Pushsdk from './components/pushsdk/pushsdk';
import Player from './components/player/player';
import Document from './components/document/docment';

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