import React, { Component } from 'react';
import { render } from 'react-dom';
import { baiduMap } from '../../unit';


class Contact extends Component {
    componentWillMount() {

    }

    componentDidMount() {
        baiduMap();
    }
    render() {
        return (
            <div className="contact-box">
                <div className="contact-part1">
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
                <div className="contact-part2">
                    <div className="contact-part2-map" id="dituContent"></div>
                    <div className="contact-part2-text">
                        <div className="contact-part2-title">地址</div>
                        <div className="contact-part2-script">上海市浦东新区金科路 2889 弄长泰广场 A 座 10 楼</div>
                    </div>
                </div>
                <div className="contact-part3">
                    <div className="contact-part3-left">
                        <div className="contact-part3-left-title">关注我们</div>
                        <div className="contact-part3-left-inner">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/wechart.svg" />
                            <img src="http://ofji7fgcp.bkt.clouddn.com/weibo.svg" />
                            <img src="http://ofji7fgcp.bkt.clouddn.com/medium.svg" />
                        </div>
                    </div>
                    <div className="contact-part3-right">
                        <div className="contact-part3-right-title">邮件联系</div>
                        <div className="contact-part3-right-inner">
                            销售联系<br/>
                            sales@qiniu.com<br/>
                            市场合作<br/>
                            marketing@qiniu.com<br/>
                            技术支持<br/>
                            support@qiniu.com<br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Contact;