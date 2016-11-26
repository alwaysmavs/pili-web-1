import React, { Component } from 'react';
import { render } from 'react-dom';

class Faq extends Component {

    render() {
        return (
            <div className="rtc-part3">
                <div className="rtc-part3-left">
                    <div className="rtc-part3-title">常见问题</div>
                    <div className="rtc-part3-btn">关于连麦更多问题</div>
                    <div className="rtc-part3-line">
                        <div className="rtc-part3-line-title">如何优化带宽占用？</div>
                        <div className="rtc-part3-line-inner">
                            不需要，任何支持 RTMP/HLS 协议的媒体播放器均可播放。
                        </div>
                    </div>
                    <div className="rtc-part3-line">
                        <div className="rtc-part3-line-title">推流是否也必须加入“连麦房间”？</div>
                        <div className="rtc-part3-line-inner">
                            可以的，主播推流的画面是在客户端合流后推到服务器的，因此，存储的时候，是有合流画面的。
                        </div>
                    </div>
                </div>

                <div className="rtc-part3-right">
                    <div className="rtc-part3-line">
                        <div className="rtc-part3-line-title">连麦 SDK 需要替换以前的推流 SDK 吗？</div>
                        <div className="rtc-part3-line-inner">是的，连麦 SDK 是在推流 SDK 基础上增加了</div>
                    </div>
                    <div className="rtc-part3-line">
                        <div className="rtc-part3-line-title">普通观众端是否需要专用的播放器？</div>
                        <div className="rtc-part3-line-inner">
                            不需要，任何支持 RTMP/HLS 协议的媒体播放器均可播放。
                        </div>
                    </div>
                    <div className="rtc-part3-line">
                        <div className="rtc-part3-line-title">点播回放是否也能看到连麦画面？</div>
                        <div className="rtc-part3-line-inner">
                            可以的，主播推流的画面是在客户端合流后推到服务器的，因此，存储的时候，是有合流画面的。
                        </div>
                    </div>
                    <div className="rtc-part3-line">
                        <div className="rtc-part3-line-title">连麦窗口是否可以移动？</div>
                        <div className="rtc-part3-line-inner">是的，连麦 SDK 是在推流 SDK 基础上增加了</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Faq;