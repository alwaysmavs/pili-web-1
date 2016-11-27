import React, { Component } from 'react';
import { render } from 'react-dom';

class Living extends Component {
    render() {
        return (
            <div className="living-box">
                <div className="living-part1">
                    <div className="living-part1-left">
                        <div className="living-part1-img">
                            <img className="living-icon" src="http://ofji7fgcp.bkt.clouddn.com/livingIcon.png"/>
                        </div>
                        <div className="living-script">
                            <div className="living-title">LIVING</div>
                            <div className="living-text">
                                LIVING App 是基于 Pili SDK 实现的最佳实践 Demo，<br/>
                                开放实现源码，适合零基础客户参考。
                            </div>
                        </div>
                    </div>
                    <div className="living-part1-right">
                        <div>
                            <img src="http://ofji7fgcp.bkt.clouddn.com/download.svg"/>
                        </div>
                        <div className="living-part1-ios">
                            扫码下载 iOS 版本
                        </div>
                        <div className="living-part1-android">
                            * Android 即将上线
                        </div>
                    </div>
                    <div></div>
                </div>

                <div className="living-part2">
                    <img className="living-part2-img" src="http://ofji7fgcp.bkt.clouddn.com/living-bg.png"/>
                </div>

                <div className="living-part3">
                    <div className="living-part3-box">
                        <div className="living-part3-midbox">
                            <div className="living-part3-box-title">直播</div>
                            <div className="living-part3-box-text">
                                支持实时 RTMP 推流直播及RTMP、FLV 格式观看，延迟 2.5s 以内，同时支持录屏和混音。
                            </div>
                        </div>
                    </div>
                    <div className="living-part3-box">
                        <div className="living-part3-midbox">
                            <div className="living-part3-box-title">互动</div>
                            <div className="living-part3-box-text">
                                嵌入多维度互动模块，例如点赞、互动消息、基于人脸识别的动态表情效果以及常用的送礼系统等等。
                            </div>
                        </div>
                    </div>
                    <div className="living-part3-box">
                        <div className="living-part3-midbox">
                            <div className="living-part3-box-title">开源</div>
                            <div className="living-part3-box-text">
                                为了方便零基础的开发者进行参考和评估，我们开放了直播 App 实现源码，希望你喜欢。
                            </div>
                            <div className="living-part3-box-btn">
                                查看开源代码
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Living;