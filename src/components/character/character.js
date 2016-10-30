import React, { Component } from 'react';
import { render } from 'react-dom';
import Feature from './feature';

class Character extends Component {
    render() {
        return (
            <div className="character-outbox">
                <div className="character-part1-bg">
                    <div className="character-part1">
                        <div className="character-part1-left">
                            <div className="character-part1-title">功能大全</div>
                            <div className="character-part1-inner1">
                                越来越多的互动，<br/>
                                值得拥有。
                            </div>
                            <div className="character-part1-inner2">
                                嵌入多维度互动模块，例如点赞、互动消息、<br/>
                                基于人脸识别的动态表情效果以及常用的送礼<br/>
                                系统等等。
                            </div>
                        </div>
                        <div className="character-part1-right">
                            <img className="character-part1-img" src="http://ofji7fgcp.bkt.clouddn.com/charater.png" />
                        </div>
                    </div>
                </div>
                <div className="character-part2">

                    <div className="character-part2-line">
                        <div className="character-part2-left">
                            <div className="character-part2-title">连麦互动</div>
                            <div className="character-part2-inner">弹幕、私信，以及更多更快速的 IM 方案集成。</div>
                            <div className="character-part2-btn">了解连麦互动 RTC</div>
                        </div>
                        <div className="character-part2-right">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/rtc.svg" />
                        </div>
                    </div>

                    <div className="character-part2-line">
                        <div className="character-part2-left">
                            <div className="character-part2-title">消息互动</div>
                            <div className="character-part2-inner">弹幕、私信，以及更多更快速的 IM 方案集成。</div>
                        </div>
                        <div className="character-part2-right">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/message.svg" />
                        </div>
                    </div>

                    <div className="character-part2-line">
                        <div className="character-part2-left">
                            <div className="character-part2-title">美颜滤镜</div>
                            <div className="character-part2-inner">主播端画面加入各种滤镜效果，十分逼真优秀的美颜效果</div>
                        </div>
                        <div className="character-part2-right">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/beaty.svg" />
                        </div>
                    </div>
                </div>

                <div className="character-part3">
                    <Feature />
                </div>

            </div>
        )
    }
}


export default Character;