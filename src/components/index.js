import React, { Component } from 'react';
import Navigator from './public/navigator';
import Footer from  './public/footer';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navigator />
                </div>
                <div className="want-main-body">
                    {this.props.children}
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}



export default App;
