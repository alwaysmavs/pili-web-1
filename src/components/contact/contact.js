import React, { Component } from 'react';
import { render } from 'react-dom';
import { baiduMap } from '../../unit';
import Apply from './apply';


class Contact extends Component {

    componentDidMount() {
        baiduMap();
    }
    render() {
        return (
            <div className="contact-box">
                <div className="contact-part1">
                    <Apply />
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