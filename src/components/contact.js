import React, { Component } from 'react';
import { render } from 'react-dom';
import { baiduMap } from '../Plugins/baiduMap';
import Apply from './public/apply';


class Contact extends Component {

    componentDidMount() {
        baiduMap();
    }
    render() {
        return (
            <div className="contact-box">
                <div className="contact-part1">
                    <div className="contact-part1-left">
                        <div className="contact-part1-title">联系我们</div>
                        <div className="contact-part1-inner">你可以直接发邮件到：pili-product@qiniu.com</div>
                    </div>
                    <div className="contact-part1-right">
                        <div className="contact-part1-btn">发邮件给我们</div>
                    </div>
                </div>
                <div className="contact-part2">
                    <div className="contact-part2-midbox">
                        <div className="contact-part2-text">
                            <div className="contact-part2-title">地址</div>
                            <div className="contact-part2-script">上海市浦东新区金科路 2889 弄长泰广场 A 座 10 楼</div>
                        </div>
                        <div className="contact-part2-map" id="dituContent"></div>
                    </div>
                </div>
                <div className="contact-part3">
                    <div className="contact-part3-mid">
                        <div className="contact-part3-title">关注我们</div>
                        <div className="contact-part3-inner">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/wechart.svg" />
                            <img src="http://ofji7fgcp.bkt.clouddn.com/weibo.svg" />
                            <img src="http://ofji7fgcp.bkt.clouddn.com/medium.svg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Contact;