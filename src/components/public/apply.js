import React, { Component } from 'react';
import { render } from 'react-dom';

class Apply extends Component {
    render() {
        return (
            <div className="apply-outbox">
                <div className="contact-part1-left">
                    <span className="contact-part1-title">联系我们</span><br/>
                        <span className="contact-part1-email">
                            你也可以直接发邮件到：pili-product@qiniu.com
                        </span>
                </div>
                <div className="contact-part1-right">
                    <div className="contact-part1-input">
                        <input type="text"  placeholder="你的姓名" />
                    </div>
                    <div className="contact-part1-input">
                        <input type="text"  placeholder="你的邮箱" />
                    </div>
                    <div className="contact-part1-input">
                        <input type="text"  placeholder="你的手机号" />
                    </div>
                    <div className="contact-part1-input">
                        <select className="contact-part1-select">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="contact-part1-input">
                        <textarea type="text"  placeholder="描述" />
                    </div>

                    <div className="contact-part1-inf">
                        发送信息<img src="http://ofji7fgcp.bkt.clouddn.com/arrow-right.svg" />
                    </div>
                </div>
                <div className="float-clear"></div>
            </div>
        )
    }
}


export default Apply;