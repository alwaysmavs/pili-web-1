import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

class Navigator extends Component {
    render() {


        return (
            <div className="nav-outbox">
                <div className="nav-midbox">
                    <div className="nav-left">
                        <Link to="/">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/logo.svg"/>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <div className="nav-right-cell">
                            <Link to="/price">价格</Link>
                        </div>
                        <div className="nav-right-cell">开发文档</div>
                        <div className="nav-right-cell">常见问题</div>
                        <div className="nav-right-cell">登录</div>
                    </div>

                </div>
            </div>
        )
    }
}



export default Navigator;
