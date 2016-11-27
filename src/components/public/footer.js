import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

class Footer extends Component {

    render() {
        return (
            <div className="footer-outbox">
                <div className="footer-line">
                        <div>
                            <Link to="/about"> 关于我们</Link>
                        </div>
                        <div>
                            <Link to="/price">服务方案</Link>
                        </div>
                        <div>
                            <Link to="/document">开发文档</Link>
                        </div>
                        <div>
                            <Link to="/contact">办公地址</Link>
                        </div>
                        <div>
                            <a href="https://pili.kf5.com/hc/">常见问题</a>
                        </div>
                </div>
                <div className="footer-bottom">
                    <a href="http://www.qiniu.com">
                        A team of Qiniu.
                    </a>
                </div>
            </div>
        )
    }
}


export default Footer;