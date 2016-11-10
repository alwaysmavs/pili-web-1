import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

class Pushsdk extends Component {

    render() {
        return (
            <div className="pushsdk-outbox">
                <div className="pushsdk-part1-bg">
                    <div className="pushsdk-part1">
                        <div className="pushsdk-part1-left">
                            <div className="pushsdk-part1-line1">
                                <img src="http://ofji7fgcp.bkt.clouddn.com/push_icon.svg" />
                            </div>
                            <div className="pushsdk-part1-line2" >推流 SDK</div>
                            <div className="pushsdk-part1-line3">
                                源源不断，<br/>
                                丰富你的直播内容来源。
                            </div>
                            <div className="pushsdk-part1-line4">
                                高性能的直播推流 SDK，让你的移动应用开启直播的<br/>
                                眼睛。包体轻盈、功能丰富、轻松定制、快速二次开<br/>
                                发。
                            </div>
                            <div className="pushsdk-part1-btn">
                                立即使用
                            </div>
                        </div>
                        <div className="pushsdk-part1-right">
                            <img className="pushsdk-part1-right-img" src="http://ofji7fgcp.bkt.clouddn.com/push_phone.png" />
                        </div>
                    </div>
                </div>

                <div className="rtc-part2">
                    <div className="rtc-part2-midbox">
                        <div className="rtc-part2-action">功能</div>
                        <div className="rtc-part2-title">完善的功能，多样的互动。</div>
                        <div className="rtc-part2-inner">
                            Pili 的连麦方案在不改变原有的推流&拉流工作流程的基础<br/>
                            上，提供了简单易用的连麦对讲功能，以及整合了更多其他功<br/>
                            能：
                        </div>
                        <div className="rtc-part2-list">
                            <div className="rtc-part2-line">
                                <div>
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                                    踢人
                                </div>
                                <div>
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                                    外部美颜
                                </div>
                                <div>
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                                    踢人
                                </div>
                            </div>
                            <div className="rtc-part2-line">
                                <div>
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                                    踢人
                                </div>
                                <div>
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                                    踢人
                                </div>
                                <div>
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                                    踢人
                                </div>
                            </div>
                            <div className="rtc-part2-line">
                                <div>
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                                    踢人
                                </div>
                                <div>
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                                    踢人
                                </div>
                                <div>
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/arrow-rtc1.svg" />
                                    踢人
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pushsdk-part3">
                    <div className="pushsdk-part3-left">
                        开发友好，<br/>
                        让你新意不断。
                    </div>
                    <div className="pushsdk-part3-right">
                        <div className="pushsdk-part3-right-inner">
                            <div className="pushsdk-part3-right-icon">
                                <img src="http://ofji7fgcp.bkt.clouddn.com/pushplayicon.svg" />
                            </div>
                            <div>
                                <div className="pushsdk-part3-right-title">多样的编码格式支持</div>
                                <div className="pushsdk-part3-right-sys">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/androidicon.svg" />
                                </div>
                                <div className="pushsdk-part3-right-text">
                                    iOS 版本支持 Camera 画面捕获并进行 H.264 硬编<br/>
                                    码，以及支持 iOS 麦克风音频采样并进行 AAC 硬编<br/>
                                    码。
                                </div>

                                <div className="pushsdk-part3-right-sys">
                                    <img src="http://ofji7fgcp.bkt.clouddn.com/appleicon.svg" />
                                </div>
                                <div className="pushsdk-part3-right-text">
                                    Android 版本同时支持 H.264 软编／硬编和 AAC 软<br/>
                                    编／硬编。支持 Android Camera 画面捕获，并进行<br/>
                                    H.264 编码，以及支持 Android 麦克风音频采样并进<br/>
                                    行 AAC 编码。
                                </div>
                            </div>
                        </div>

                        <div className="pushsdk-part3-right-inner" >
                            <div className="pushsdk-part3-right-icon">
                                <img src="http://ofji7fgcp.bkt.clouddn.com/changebitrate.svg" />
                            </div>
                            <div>
                                <div className="pushsdk-part3-right-title">可变码率、分辨率（码流自适应）</div>
                                <div className="pushsdk-part3-right-text">
                                    Pili 根据移动网络环境的多变性（网络带宽-弱网优<br/>
                                    化），实现了一套可供开发者灵活选择的编码参数集<br/>
                                    合，可让你灵活调节相应分辨率和码率。<br/>
                                    实时监测全链路的网络情况，自适应调整直播流，满<br/>
                                    足复杂网络条件下高清流畅直播需求。
                                </div>
                            </div>
                        </div>

                        <div className="pushsdk-part3-right-inner">
                            <div className="pushsdk-part3-right-icon">
                                <img src="http://ofji7fgcp.bkt.clouddn.com/compress1.svg" />
                            </div>
                            <div>
                                <div className="pushsdk-part3-right-title">可变码率、分辨率（码流自适应）</div>
                                <div className="pushsdk-part3-right-text">
                                    Pili 根据移动网络环境的多变性（网络带宽-弱网优<br/>
                                    化），实现了一套可供开发者灵活选择的编码参数集<br/>
                                    合，可让你灵活调节相应分辨率和码率。<br/>
                                    实时监测全链路的网络情况，自适应调整直播流，满<br/>
                                    足复杂网络条件下高清流畅直播需求。
                                </div>
                            </div>
                        </div>

                        <div className="pushsdk-part3-right-inner">
                            <div className="pushsdk-part3-right-icon">
                                <img src="http://ofji7fgcp.bkt.clouddn.com/face.svg" />
                            </div>
                            <div>
                                <div className="pushsdk-part3-right-title">可变码率、分辨率（码流自适应）</div>
                                <div className="pushsdk-part3-right-text">
                                    Pili 根据移动网络环境的多变性（网络带宽-弱网优<br/>
                                    化），实现了一套可供开发者灵活选择的编码参数集<br/>
                                    合，可让你灵活调节相应分辨率和码率。<br/>
                                    实时监测全链路的网络情况，自适应调整直播流，满<br/>
                                    足复杂网络条件下高清流畅直播需求。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rtc-part3">
                    <div className="rtc-part3-left">
                        <div className="rtc-part3-title">常见问题</div>
                        <div className="rtc-part3-btn">关于连麦更多问题</div>
                        <div className="rtc-part3-line">
                            <div className="rtc-part3-line-title">如何优化带宽占用？</div>
                            <div className="rtc-part3-line-inner">
                                不需要，任何支持 RTMP/HLS 协议的媒体播放器均可播<br/>
                                放。
                            </div>
                        </div>
                        <div className="rtc-part3-line">
                            <div className="rtc-part3-line-title">推流是否也必须加入“连麦房间”？</div>
                            <div className="rtc-part3-line-inner">
                                可以的，主播推流的画面是在客户端合流后推到服务器的，<br/>
                                因此，存储的时候，是有合流画面的。
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
                            <div className="rtc-part3-line-inner">不需要，任何支持 RTMP/HLS 协议的媒体播放器均可播<br/>
                                放。
                            </div>
                        </div>
                        <div className="rtc-part3-line">
                            <div className="rtc-part3-line-title">点播回放是否也能看到连麦画面？</div>
                            <div className="rtc-part3-line-inner">
                                可以的，主播推流的画面是在客户端合流后推到服务器的，<br/>
                                因此，存储的时候，是有合流画面的。
                            </div>
                        </div>
                        <div className="rtc-part3-line">
                            <div className="rtc-part3-line-title">连麦窗口是否可以移动？</div>
                            <div className="rtc-part3-line-inner">是的，连麦 SDK 是在推流 SDK 基础上增加了</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Pushsdk;