import React, { Component } from 'react';
import { render } from 'react-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer-outbox">
                <div className="footer-midbox">
                    <div className="footer-logo">
                        <img src="http://ofji7fgcp.bkt.clouddn.com/logo.svg" />
                    </div>
                    <div className="footer-right">
                        <div>最佳实践 Demo</div>
                        <div>价格</div>
                        <div>开发文档</div>
                        <div>常见问题</div>
                        <div>Team Of Qiniu <img src="" /></div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Footer;