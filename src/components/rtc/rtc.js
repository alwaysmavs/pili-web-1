import React, { Component } from 'react';
import { render } from 'react-dom';

class Rtc extends Component {
    render() {
        return (
            <div className="rtc-outbox">
                <div className="rtc-part1-bg">
                    <div className="rtc-part1">
                        <div className="rtc-part1-left">
                            <div className="rtc-part1-title">
                                连麦互动，<br/>
                                让你的产品更热闹。
                            </div>
                            <div className="rtc-part1-inner">
                                Pili 的连麦方案在不改变原有的推流&拉流工作流程的
                                基础上，提供了简单易用的连麦对讲功能。该方案主要
                                包括连麦服务端和客户端两个部分，其中，连麦服务端
                                主要提供了房间管理、权限验证、信令和媒体数据转发
                                等功能，客户端则提供了媒体数据的采集、编码、传
                                输、显示等功能。
                            </div>
                            <div className="rtc-part1-btn">立即使用</div>
                        </div>
                        <div className="rtc-part1-right">
                            <img className="rtc-part1-img" src="http://ofji7fgcp.bkt.clouddn.com/rtc.png" />
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
            </div>

        )
    }
}


export default Rtc;