import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';
import Doc from '../public/doc';
import Faq from '../public/faq';
import FeatureList from '../public/featureList';
import { PLAYER_FEATURELIST } from '../../constants/featureListData';
import { PLAYER_FAQ } from '../../constants/faqData';
import { PLAYER_DOC } from '../../constants/docData';


class Player extends Component {

    render() {

        let featureArray = PLAYER_FEATURELIST;
        let faqData = PLAYER_FAQ;
        let docData = PLAYER_DOC;

        return (
            <div className="player-outbox">
                <div className="player-part1">

                    <div className="player-part1-line1">

                        <div className="player-part1-line1-left">
                            <div>
                                <img className="player-part1-icon"
                                     src="http://ofji7fgcp.bkt.clouddn.com/playericon.svg"/>
                            </div>
                            <div className="player-part1-line1-title">播放器 SDK</div>
                            <div className="player-part1-line1-inner">
                                精彩视野，<br/>
                                互动播放更加丰富。
                            </div>
                        </div>

                        <div className="player-part1-line1-btn">
                            立即使用
                        </div>
                    </div>


                    <div className="player-part1-line2">
                        <img className="player-part1-img" src="http://ofji7fgcp.bkt.clouddn.com/player.png"/>
                    </div>
                    <div className="player-part1-line3">
                        强大的播放解码 SDK，专注直播而不限直播。难以置<br/>
                        信的轻量体积，体验直播秒开的快感。
                    </div>
                </div>
                <div className="player-part2">

                    <div className="player-part2-cell">
                        <div className="player-part2-cell-icon">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/playercion2.svg"/>
                        </div>
                        <div className="player-part2-cell-title">多用播放器</div>
                        <div className="player-part2-cell-inner">
                            不仅适用于直播格式还支持更多主流媒体格式。
                        </div>
                    </div>

                    <div className="player-part2-cell">
                        <div className="player-part2-cell-icon">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/zidingyi.svg"/>
                        </div>
                        <div className="player-part2-cell-title">直播视频秒开</div>
                        <div className="player-part2-cell-inner">
                            通过优化网络层，实现秒级打开播放器。
                        </div>
                    </div>

                    <div className="player-part2-cell">
                        <div className="player-part2-cell-icon">
                            <img src="http://ofji7fgcp.bkt.clouddn.com/quickstart.svg"/>
                        </div>
                        <div className="player-part2-cell-title">多用播放器</div>
                        <div className="player-part2-cell-inner">
                            不仅适用于直播格式还支持更多主流媒体格式。
                        </div>
                    </div>
                </div>

                <div className="player-part3">
                    <div className="player-part3-line1">
                        <div className="player-part3-inner1">功能</div>
                        <div className="player-part3-inner2">完善的功能，多样的组合。</div>
                        <div className="player-part3-inner3">
                            Pili 的播放器 SDK 在最基础的拉流、解码、播放三步流程<br/>
                            中，不断优化和新增现有市场业务模型所需功能。
                        </div>
                    </div>
                    <FeatureList featureArray={ featureArray } />
                </div>

                <Faq faqData={faqData} />
                <Doc docData={docData} />
            </div>
        )
    }
}


export default Player;