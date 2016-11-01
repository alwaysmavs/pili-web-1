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
                            <Link to="/living">
                                最佳实践 Demo
                            </Link>
                        </div>
                        <div>
                            <Link to="/price">价格</Link>
                        </div>
                        <div>开发文档</div>
                        <div>常见问题</div>
                </div>
                <div className="footer-bottom">
                    沪 ICP 备 14045638 号
                </div>
            </div>
        )
    }
}


export default Footer;