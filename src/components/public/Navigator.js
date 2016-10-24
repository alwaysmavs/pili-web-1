import React, { Component } from 'react';
import { render } from 'react-dom';

class Navigator extends Component {
    render() {


        return (
            <div className="nav-outbox">
                <div className="nav-midbox">
                    <div className="nav-left">
                        <img src="http://ofji7fgcp.bkt.clouddn.com/logo.svg"/>
                    </div>
                    <div className="nav-right">
                        <div className="nav-right-cell">价格</div>
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
