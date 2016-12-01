import React, { Component } from 'react';
import { render } from 'react-dom';
// import Feature from './feature';
import { PAGE_FEATURE_LIST } from '../constants/pageData';

class Character extends Component {
    render() {

        let pageFeatureArray = PAGE_FEATURE_LIST;

        let pageFeatureList = pageFeatureArray.map(
            function (data) {
                return (
                    <div className="character-part3-cell" key={data.pageFeatureId}>
                        <div className="character-part3-midbox">
                            <div className="character-part3-title">
                                {data.pageFeatureTitle}
                            </div>
                            <div className="character-part3-inner">
                                {data.pageFeatureInner}
                            </div>
                        </div>
                    </div>
                )
            }
        );

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

                        <div className="character-part2-box">
                            <div className="character-part2-right">
                                <img className="character-part2-img1" src="http://ofji7fgcp.bkt.clouddn.com/icon_lianmai%282%29.svg" />
                            </div>
                            <div className="character-part2-title">连麦互动</div>
                            <div className="character-part2-inner">增加主播和用户的事实互动性，让产品更加生动</div>
                        </div>


                        <div className="character-part2-box">
                            <div className="character-part2-right">
                                <img className="character-part2-img2" src="http://ofji7fgcp.bkt.clouddn.com/icon_face(1).svg" />
                            </div>
                            <div className="character-part2-title">面部特效</div>
                            <div className="character-part2-inner">提供精准的检测和丰富有趣的贴纸，让直播充满趣味</div>
                        </div>


                        <div className="character-part2-box">
                            <div className="character-part2-right">
                                <img className="character-part2-img3" src="http://ofji7fgcp.bkt.clouddn.com/icon_ScreenCAP(1).svg" />
                            </div>
                            <div className="character-part2-title">全平台录屏</div>
                            <div className="character-part2-inner">提供最优质和全面的录屏方案，实施分享主播的体验</div>
                        </div>

                </div>

                <div className="character-part3">
                    {pageFeatureList}
                    <div className="float-clear"></div>
                </div>

            </div>
        )
    }
}


export default Character;