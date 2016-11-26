import React, { Component } from 'react';
import { render } from 'react-dom';
import Faq from '../public/faq';
import Doc from '../public/doc';
import FeatureList from '../public/featureList';
import { RTC_FEATURELIST } from '../../constants/featureListData';
import { RTC_FAQ } from '../../constants/faqData';
import { RTC_DOC } from '../../constants/docData';

class Rtc extends Component {
    render() {

        let featureArray = RTC_FEATURELIST;
        let faqData = RTC_FAQ;
        let docData = RTC_DOC;

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
                        <FeatureList featureArray={ featureArray } />
                    </div>
                </div>
                <Faq faqData={faqData} />
                <Doc docData={docData} />
            </div>

        )
    }
}


export default Rtc;